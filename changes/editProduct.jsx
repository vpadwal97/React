
import FormGroup from "../../../../../../forms/FormGroup";
import SelectComponent from "../../../../../../forms/SelectComponent";
import "../../../../../../css/Style.css";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "../../../../../../util/HttpServices";
import { IoIosInformationCircle } from "react-icons/io";
import { ToastContainer, toast } from "react-toastify";
import { TooltipMessages } from "../../../../../constants/TooltipConstants";
import IoIosInformationCircleCustom from "../../../../../../forms/IoIosInformationCircleCustom";
function EditProduct() {

    const epmc = TooltipMessages.catalogue.product.ManufacturerDetails.editProduct;
    let manufacturerRfnum = useLocation().search.split("?").filter((x) => x);
    const navigate = useNavigate();
    const [Country, setCountryList] = useState([]);
    const [ManufacturerCountry, setManufacturerCountry] = useState();
    const [ManufacturerCode, setManufacturerCode] = useState();
    const [ManufacturerName, setManufacturerName] = useState();
    const [ManufacturerAddress, setManufacturerAddress] = useState();
  
    useEffect(() => {
        getCountryList()
        updateDisplayStatus()
    }, [])
    const updateDisplayStatus = async () => {
        axios.get(`/api/manufacturer/${manufacturerRfnum}`, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
            .then((response) => {
                const data = response.data;
                    setManufacturerCountry(data.manufacturerCountry)
                    setManufacturerName(data.manufacturerName)
                    setManufacturerCode(data.manufacturerCode)
                    setManufacturerAddress(data.manufacturerAddress)
            })
            .catch((error) => {
                console.log(error)
                toast.error(error.response?.data.message)
            })
    }
    const getCountryList = async () => {
        await axios.get('/api/country/countryDropdown')
            .then((response) => {
                setCountryList(response.data)
            })
            .catch((error) => {
                console.log(error)
                toast.error(error.response?.data.message)
            })
    }
// validation
const validateForm = ()=>{
    if(!ManufacturerCountry){
        return {
            isValid:false,
            message:'Manufacturer Country Is Mandatory.'
        }
    }
    if(!ManufacturerCode){
        return {
            isValid:false,
            message:'Manufacturer Code Is Mandatory.'
        }
    }
    if(!ManufacturerName){
        return {
            isValid:false,
            message:'Manufacturer Name Is Mandatory.'
        }
    }
    return {
        isValid:true
    }
}
    const editProduct = async () => {
    const validateStatus = validateForm();
    if(validateStatus.isValid){
    axios.put(`/api/manufacturer/${manufacturerRfnum}`, {
        manufacturerCountry: ManufacturerCountry,
        manufacturerName: ManufacturerName,
        manufacturerAddress: ManufacturerAddress,
        isActive: 'Y'
    }, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
            .then((response) => {
                toast.success("Product Updated !")
            })
            .catch((error) => {
                console.log(error)
                toast.error(error.response?.data.message)
            })
        }else{
            toast.error(validateStatus.message)
        }
    }

    // css work
    const cssStyle = {
        fontSize: '35px',
        fontWeight: 'bolder',
        color: ' #2196F3',
        backgroundColor: 'white',
        position: 'absolute',
        marginTop: '-35px',
        marginLeft: '25px',
        padding: '5px'
    }

    return (
        <>
            <div className='row d-flex justify-content-end pe-5'>
                <div className="buttons d-flex justify-content-end p-1"  >
                    <button className="btn btn-md m-2 mt-4 text-white rounded-3 me-3 " style={{ backgroundColor: '#349F01', fontSize: '16px', fontWeight: 'bold', width: '200px' }} onClick={() => navigate("/product/manufacturerDetails")} >Cancel</button>
                    <button className="btn btn-md m-2 mt-4 text-white rounded-3 me-3 " style={{ backgroundColor: '#349F01', fontSize: '16px', fontWeight: 'bold', width: '200px' }} onClick={() => navigate("/product/createProduct")} >Create</button>
                </div>
            </div>
            <div className=" m-5 mt-4 " style={{ border: ' 4px solid #2196F3' }}>
                <span style={cssStyle}>Edit</span>
                <div className="m-5">
                    <div className="row m-4" >
                        <div className="col-md-4 mt-4"  >
<<<<<<< HEAD
                            <SelectComponent placeholder='Country of manufacture' tooltipMessage={epmc.country} selectedOption={productEditData.manufacturerCountry}   dropdownlist={Country} onChange={(e) => setProductEditData({ ...productEditData, manufacturerCountry: e.target.value })} />
                        </div>
                        <div className="col-md-4 mt-3"  >
                            <FormGroup type="text" tooltipMessage={epmc.name} value={productEditData.manufacturerName} onChange={(e) => setProductEditData({ ...productEditData, manufacturerName: e.target.value })} maxLength="" placeholder="" label="Manufacturer Name" required='true'  />
                        </div>
                        <div className="col-md-4 mt-3"  >
                            <FormGroup type="textarea"  tooltipMessage={epmc.code} value={productEditData.manufacturerCode}  onChange={(e) => setProductEditData({ ...productEditData, manufacturerCode: e.target.value })}  placeholder=""   label="Manufacturer Code " required='true' />
                        </div>
                        <div className="col-md-4 mt-3"  >
                            <div class="form-group">
                                <textarea id="ceaddress" name="ceaddress" class="form-control input-shadow" placeholder="" value={productEditData.manufacturerAddress} onChange={(e) => setProductEditData({ ...productEditData, manufacturerAddress: e.target.value })}></textarea>
                                <label for="ceaddress">Address 
                                
                                <IoIosInformationCircleCustom tooltipMessage={epmc.address} />
                                </label>
=======
                            <SelectComponent placeholder='Country of manufacture' selectedOption={ManufacturerCountry} dropdownlist={Country} onChange={(e) =>setManufacturerCountry(e.target.value)} required="required" />
                        </div>
                        <div className="col-md-4 mt-3"  >
                            <NewFormGroup type="text" value={ManufacturerName} onChange={(e) => setManufacturerName(e.target.value)} maxLength="" placeholder="" label="Manufacturer Name" required="required" />
                        </div>
                        <div className="col-md-4 mt-3"  >
                            <NewFormGroup type="textarea"
                             value={ManufacturerCode} onChange={(e) => setManufacturerCode(e.target.value)} placeholder="" label="Manufacturer Code " required="required" disabled='true' />
                        </div>
                        <div className="col-md-4 mt-3"  >
                            <div class="form-group">
                                <textarea id="ceaddress" name="ceaddress" class="form-control input-shadow" placeholder="" value={ManufacturerAddress} onChange={(e) => setManufacturerAddress(e.target.value)}></textarea>
                                <label for="ceaddress">Address <IoIosInformationCircle style={{ fontSize: "15px", background: "#f6f6f6" }} />  </label>
>>>>>>> 20203647b4132e40bff9328a7241f7d2c053ecf1
                            </div>
                        </div>
                    </div>
                    <div className="buttons d-flex justify-content-end p-1"  >
                        <button className="btn btn-lg m-2 px-5 py-2 text-white rounded-3 me-3 " style={{ backgroundColor: '#349F01' }} onClick={editProduct}>Save</button>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </>
    )

}
export default EditProduct;