import FormGroup from "../../../../../../forms/FormGroup";
import SelectComponent from "../../../../../../forms/SelectComponent";
import "../../../../../../css/Style.css";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { IoIosInformationCircle } from "react-icons/io";
import IoIosInformationCircleCustom from "../../../../../../forms/IoIosInformationCircleCustom";
import { TooltipMessages } from "../../../../../constants/TooltipConstants";

function CreateProductComponent() {
    const cpc = TooltipMessages.catalogue.product.ManufacturerDetails.CreateProductComponent;
    const [Country, setCountryList] = useState([]);
    const navigate = useNavigate();
    const [ManufacturerCountry, setManufacturerCountry] = useState();
    const [ManufacturerCode, setManufacturerCode] = useState();
    const [ManufacturerName, setManufacturerName] = useState();
    const [ManufacturerAddress, setManufacturerAddress] = useState();
    useEffect(() => {
        getCountryList()
    }, [])
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
    const validateForm = () => {
        if (!ManufacturerName) {
            return {
                isValid: false,
                message: 'Manufacturer Name Is Mandatory.'
            }
        }
        if (!ManufacturerCode) {
            return {
                isValid: false,
                message: 'Manufacturer Code Is Mandatory'
            }
        }
        return {
            isValid: true
        }

    }
    const addProduct = async () => {
        const validateStatus = validateForm();
        if (validateStatus.isValid) {
            await axios.post("api/manufacturer/save", {
                manufacturerCountry: ManufacturerCountry,
                manufacturerName: ManufacturerName,
                manufacturerCode: ManufacturerCode,
                manufacturerAddress: ManufacturerAddress,
                isActive: 'Y'
            }, {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            })
                .then((response) => {
                    if (response.status === 201) {
                        toast.success(" Product Added...")
                    }
                })
                .catch((error) => {
                    console.log(error)
                    toast.error(error.response?.data.message)
                })
        } else {
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
                </div>
            </div>
            <div className=" m-5 mt-4" style={{ border: ' 4px solid #2196F3' }}>
                <span style={cssStyle}>Add</span>
                <div className="m-5">
                    <div className="row m-4" >
                        <div className="col-md-4 mt-4"  >
<<<<<<< HEAD
                            <SelectComponent tooltipMessage={cpc.country} placeholder='Country of manufacture' dropdownlist={Country} onChange={(e) => setProductData({ ...Product, manufacturerCountry: e.target.value })} />
                        </div>
                        <div className="col-md-4 mt-3"  >
                            <FormGroup type="text" tooltipMessage={cpc.name} onChange={(e) => setProductData({ ...Product, manufacturerName: e.target.value })} placeholder="" label="Manufacturer Name" required='true' />
                        </div>
                        <div className="col-md-4 mt-3"  >
                            <FormGroup type="textarea" tooltipMessage={cpc.code} onChange={(e) => setProductData({ ...Product, manufacturerCode: e.target.value })} placeholder="" label="Manufacturer Code " required='true' />
                        </div>
                        <div className="col-md-4 mt-3"  >
                            <div class="form-group">
                                <textarea id="ceaddress" style={{ minHeight: '55px' }} name="ceaddress" class="form-control input-shadow" placeholder="" value={Product.manufacturerAddress} onChange={(e) => setProductData({ ...Product, manufacturerAddress: e.target.value })}></textarea>
                                <label for="ceaddress">Address 
                                <IoIosInformationCircleCustom tooltipMessage={cpc.address} style={{ fontSize: "15px", background: "#f6f6f6" }} />
                                </label>
=======
                            <SelectComponent placeholder='Country of manufacture' dropdownlist={Country} onChange={(e) => setManufacturerCountry(e.target.value)} />
                        </div>
                        <div className="col-md-4 mt-3"  >
                            <NewFormGroup type="text" onChange={(e) => setManufacturerName(e.target.value)} placeholder="" label="Manufacturer Name" required="required" />   </div>
                        <div className="col-md-4 mt-3"  >
                            <NewFormGroup type="textarea" onChange={(e) => setManufacturerCode(e.target.value)} placeholder="" label="Manufacturer Code " required="required" />
                        </div>
                        <div className="col-md-4 mt-3"  >
                            <div class="form-group">
                                <textarea id="ceaddress" style={{ minHeight: '55px' }} name="ceaddress" class="form-control input-shadow" placeholder="" value={ManufacturerAddress} onChange={(e) => setManufacturerAddress(e.target.value)}></textarea>
                                <label for="ceaddress">Address <IoIosInformationCircle style={{ fontSize: "15px", background: "#f6f6f6" }} /></label>
>>>>>>> 20203647b4132e40bff9328a7241f7d2c053ecf1
                            </div>
                        </div>
                    </div>
                    <div className="buttons d-flex justify-content-end p-1"  >
                        <button className="btn btn-lg m-2 px-5 py-2 text-white rounded-3 me-3 " style={{ backgroundColor: '#349F01' }} onClick={addProduct} >Save</button>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </>
    )

}
export default CreateProductComponent;