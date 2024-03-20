import axios from "../../../../../util/HttpServices";
import { useEffect, useState } from "react";
import SelectComponent from "../../../../../forms/SelectComponent";
import SelectComponentCategory from "../../../../../forms/SelectComponentCategory";
import InputField from "../../../../../forms/InputField";
import { Table } from "react-bootstrap";
import ImageIcon from "../../../../../forms/ImageIcon";
import { ToastContainer, toast } from "react-toastify";
<<<<<<< HEAD
import FormGroup from "../../../../../forms/FormGroup";
import { TooltipMessages } from "../../../../constants/TooltipConstants";
const PriceManagementUpdates = () => {
    const pmu = TooltipMessages.seller.price.priceManagementUpdates;
=======
import NewFormGroup from "../../../../../forms/NewFormGroup";
import '../../../../../css/Style.css';
import { TablePagination, Box, Tooltip, ThemeProvider, createTheme } from '@mui/material';
const PriceManagementUpdates = () => {

    // dropdowm values 
    const [sellerDropDown, setSellerDropdown] = useState([]);
    const [storeDropDown, setStoreDropdown] = useState([]);
>>>>>>> 20203647b4132e40bff9328a7241f7d2c053ecf1
    const [category, setCategory] = useState([]);
    const [CategoryTwoData, setCategoryTwoData] = useState([]);
    const [CategoryThreeData, setCategoryThreeData] = useState([]);
    // search result data
    const [PriceData, setPriceData] = useState([]);
    let UpdatedDataKey = [];
    // display hide or show 
    const [Category2, setCategory2] = useState(false);
    const [Category3, setCategory3] = useState(false);
    const [ListDisplay, setDisplayStatus] = useState('none')
    // dropdown values 
    const [productSku, setProductSku] = useState('');
    const [categoryCode, setCategoryCode] = useState('');
    const [storeCode, setStoreCode] = useState('');
    const [sellerCode, setSellerCode] = useState('');
    // pagination
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [totalCount, setTotalCount] = useState(0);
    const [numberOfPages, setNumberOfPages] = useState(null);
    useEffect(() => {
        getTopCategoryValues()
        ShowSellerDropdown()
        setRowsPerPage(5);
    }, [])

    const getTopCategoryValues = async () => {
        await axios.get('api/category-association-list/topCategory', {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
            .then((response) => {
                    console.log(response)
                    let test = [];
                    for (let i = 0; i < response.data.length; i++) {
                        let result = response.data[i];
                        test.push({
                            id: result.id,
                            optionLabel: result.optionLabel,
                            optionValue: result.optionValue,
                            extraValue: result.extraValue
                        })
                    }
                    setCategory(test)
            })
            .catch((error) => {
                toast.error(error.response?.data.message)
            })
    }
    const ShowSellerDropdown = async () => {
        try {
            const dropdownResponse = await axios.get("/api/sellerlist/sellerDropdownList")
            const sellerList = dropdownResponse.data;
            setSellerDropdown(sellerList);
        }
        catch (error) {
            console.log(error);
        }

    }

    const handleSeller = async (value) => {
        try {
            setSellerCode(value);
            const dropdownResponse = await axios.post("/api/storelist/StoreDropdown", {
                sellerCode: value
            })
            const storeList = dropdownResponse.data;
            setStoreDropdown(storeList);
        }
        catch (error) {
            console.log(error);
        }
    }

    const getAllChildByTopCategory = async (e) => {

        setCategoryTwoData([])
        setCategoryThreeData([])
        setCategory3(false)

        await axios.post('api/category-attribute-association/all-child-category', {
            cmtcode: e.target.value
        })
            .then((response) => {
                    let test = [];
                    for (let i = 0; i < response.data.length; i++) {
                        let result = response.data[i];
                        test.push({
                            categoryRfnum: result.categoryRfnum,
                            cmtcode: result.cmtcode,
                            cmtname: result.cmtname,
                        })
                    }
                    setCategoryTwoData(test)
            })
            .catch((error) => {
                toast.error(error.response?.data.message)
                console.log(error)
            })
        setCategory2(true);
    }
    const getCategoryTwoId = (e) => {
        setCategory3(false)
        console.log(e.target.value)
        let id = {
            cmtcode: e.target.value
        }
        axios.post('api/category-attribute-association/all-child-category', id)
            .then((response) => {
                console.log(response)
                    let test = [];
                    for (let i = 0; i < response.data.length; i++) {
                        let result = response.data[i];
                        test.push({
                            categoryRfnum: result.categoryRfnum,
                            cmtcode: result.cmtcode,
                            cmtname: result.cmtname,
                        })
                    }
                    setCategoryThreeData(test)
                    if (test.length === 0) {
                        setCategoryCode(e.target.value)
                    } else {
                        setCategory3(true);
                    }
            })
            .catch((error) => {
                console.log(error)
                toast.error(error.response?.data.message)
            })
    }
    const categoryLast = (e) => {
        setCategoryCode(e.target.value)
    }

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
        updateDisplayStatus(newPage, rowsPerPage);
    };

    const handleChangeRowsPerPage = (event) => {
        const newRowsPerPage = parseInt(event.target.value, 10);
        setRowsPerPage(newRowsPerPage);
        setPage(0);
        updateDisplayStatus(0, newRowsPerPage);
    };
      // theme 
    const theme = createTheme({
        components: {
            MuiTablePagination: {
                styleOverrides: { selectLabel: { marginTop: "13px" }, displayedRows: { marginTop: "15px" } },
            },
        },
    });
    // validation 
    const validationForm =()=>{
        if(!sellerCode){
            return {
                isValid: false,
                message: 'Seller Is Mandatory.',
              };
        }
        if(!storeCode){
            return {
                isValid: false,
                message: 'Store Is Mandatory.',
              };
        }
        return {
            isValid:true
        }
    }
    const updateDisplayStatus = async (newPage, newRowsPerPage) => {
       const validateStatus = validationForm();

        setPriceData([])
        setDisplayStatus('block')
        
        if(validateStatus.isValid){
        await axios.post("/api/productPriceInventory/search",
            {
                categoryCode: categoryCode,
                productSku: productSku,
                sellerCode: sellerCode,
                storeCode: storeCode,
                page: newPage,
                size: newRowsPerPage
            }).then((response) => {
                if (response.status === 200) {
                    console.log(response)
                    if (response.data.responseList.length !== 0) {
                        setPriceData(response.data.responseList);

                    } else {
                        toast.success('No Data Available! ')
                    }
                } else {
                    toast.warn('Enter Valid Data ! ')
                }
                setTotalCount(response.data.numberOfItems);
                const calculatedNumberOfPages = Math.ceil(response.data.numberOfItems / newRowsPerPage);
                setNumberOfPages(calculatedNumberOfPages);
            })
            .catch((error) => {
                console.log(error)
                toast.error(error.response?.data.message)
            })
        } else {
            toast.error(validateStatus.message);
          }
    }

    const checkboxClick = (e) => {
        if (e.target.checked === true) {
            let a = document.getElementsByClassName('CheckBoxValue');
            for (let i = 0; i < a.length; i++) {
                document.getElementById('CheckBoxValue' + i).checked = true;
                let val = a[i].value;
                UpdatedDataKey.push(
                    {
                        key: val
                    }
                );
            }
        }
        else if (e.target.checked === false) {
            let a = document.getElementsByClassName('CheckBoxValue').length;
            for (let i = 0; i < a; i++) {
                document.getElementById('CheckBoxValue' + i).checked = false;
            }
        }
    }
    const getPriceInfo = (e) => {
        document.getElementById(e.target.value).style.display = 'contents';
        document.getElementById(e.target.value + 'btn-show').style.display = 'none';
        document.getElementById(e.target.value + 'btn-hide').style.display = 'block';
    }
    const hidePriceInfo = (e) => {
        document.getElementById(e.target.value).style.display = 'none';
        document.getElementById(e.target.value + 'btn-show').style.display = 'block';
        document.getElementById(e.target.value + 'btn-hide').style.display = 'none';
    }

    function getSelectedCategories(e) {
        if (e.target.checked === true) {
            let a = PriceData[e.target.value];
            if (a.ProductMRP === null && a.ProductMOP === null) {
            } else {
                UpdatedDataKey.push(
                    {
                        key: e.target.value
                    }
                );
            }
        }
    }

    const updateCategories = async () => {

        if (UpdatedDataKey.length === 0) {
            toast.warn("Please Select Row Which You Want Update")
        } else {
            let UpdatedataList = []
            UpdatedDataKey.map((data) => {
                let updatedData = PriceData[data.key];
                UpdatedataList.push({
                    storeCode: updatedData.storeCode,
                    sellerCode: updatedData.sellerCode,
                    productSku: updatedData.productSku,
                    productMrp: updatedData.productMrp,
                    productOfferPrice: updatedData.productOfferPrice,
                    inventoryId:updatedData.inventoryId
                })

            })
            console.log(UpdatedataList)
            await axios.post("/api/productPriceInventory/save", UpdatedataList,
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    },
                }
            ).then((response) => {
                console.log(response)
                    let a = document.getElementsByClassName('CheckBoxValue');
                    for (let i = 0; i < a.length; i++) {
                        document.getElementById('CheckBoxValue' + i).checked = false;
                    }
                    toast.success("Price Updated successfully.")
            }).catch((error) => {
                toast.error(error.response?.data.message)
                console.log(error)
            })
        }
    }

    // css work
    let dis12 = {
        display: 'none'
    }
    let btn_mp_hide = {
        fontSize: 'larger',
        color: '#0d6efd',
        backgroundColor: 'white',
        border: 'none',
        margin: 'auto',
        display: 'none'
    }
    let btn_mp_show = {
        fontSize: 'larger',
        color: '#0d6efd',
        backgroundColor: 'white',
        border: 'none',
        margin: 'auto',
    }
    return (
        <>
            <div className=" m-5" style={{ border: ' 2px solid #2196F3' }}>

                <div className="row m-2" >
                    <div className="col-md-4 mt-4"  >
<<<<<<< HEAD
                        <SelectComponent placeholder='Category' dropdownlist={category} tooltipMessage={pmu.category} onChange={getAllChildByTopCategory} />
=======
                        <SelectComponent placeholder="Seller" required="required" dropdownlist={sellerDropDown} onChange={(e) => handleSeller(e.target.value)} />
                    </div>
                    <div className={sellerCode ? "col-md-4 mt-4" : "col-md-4 mt-4 d-none"}>
                        <SelectComponent placeholder="Store" required="required" dropdownlist={storeDropDown} onChange={(e) => setStoreCode(e.target.value)} />
                    </div>

                    <div className="col-md-4 mt-4"  >
                        <SelectComponent placeholder='Category' dropdownlist={category} onChange={getAllChildByTopCategory} />
>>>>>>> 20203647b4132e40bff9328a7241f7d2c053ecf1
                    </div>
                    {Category2 ?
                        <div className="col-md-4 mt-4"  >
                            <SelectComponentCategory placeholder='Category' dropdownlist={CategoryTwoData} tooltipMessage={pmu.CategoryTwoData} onChange={getCategoryTwoId} />
                        </div>
                        : null
                    }
                    {Category3 ?
                        <div className="col-md-4 mt-4" >
                            <SelectComponentCategory placeholder='Category' dropdownlist={CategoryThreeData} tooltipMessage={pmu.CategoryThreeData} onChange={categoryLast} />
                        </div>
                        : null
                    }
                    <div className="col-md-4 mt-3"  >
<<<<<<< HEAD
                        <FormGroup type="text" value={SearchForm.productSku} tooltipMessage={pmu.productSku} onChange={(e) => setSearchFormData({ ...SearchForm, productSku: e.target.value })} maxLength="" placeholder="" label="Product sku" required='true' />
=======
                        <NewFormGroup type="text" value={productSku} onChange={(e) => setProductSku(e.target.value)} maxLength="" placeholder="" label="Product sku" required='true' />
>>>>>>> 20203647b4132e40bff9328a7241f7d2c053ecf1
                    </div>
                </div>
                <div className="buttons d-flex justify-content-end p-1"  >
                    <button className="btn btn-md m-2 px-4 py-2 text-white rounded-3 me-3 " style={{ backgroundColor: '#349F01' }} onClick={()=>updateDisplayStatus(page, 5)}>Search</button>
                </div>
            </div>

            {/* Search Data  */}
            <div className="row m-5" style={{ display: ListDisplay, border: ' 2px solid #2196F3' }}>
                <div className="buttons d-flex justify-content-end p-1"  >
                    <button className="btn btn-md m-2 px-4 py-2 text-white rounded-3 me-3 " style={{ backgroundColor: '#349F01' }} onClick={updateCategories}  >Update</button>
                </div>
                <Table responsive bordered >
                    <thead className='align-middle' align='center'>
                        <tr >
                            <th className='col-md-1'>Sr</th>
                            <th className='col-md-2'>  <input class="form-check-input " type="checkbox" id="" onChange={checkboxClick} /> <br /> Select All   </th>
                            <th className='col-md-3'>Image</th>
                            <th className='col-md-3'>Product Name</th>
                            <th className='col-md-3'>Product SKU</th>
                            <th className='col-md-3'> Listing ID</th>
                            <th className='col-md-3'>OU ID</th>
                            <th className='col-md-3'>Product MRP</th>
                            <th className='col-md-3'>Product Offer Price</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody className='align-middle' align='center'>
                        {PriceData.map((i, k) => (
                            <>
                                <tr>
                                    <td>{k + 1}</td>
                                    <td> <input id={'CheckBoxValue' + k} className='CheckBoxValue' type="checkbox" value={k} onChange={getSelectedCategories} /> </td>
                                    <td >  <ImageIcon value={i.ProductImage} />  </td>
                                    <td style={{ color: 'darkgray' }}> {i.productName} </td>
                                    <td style={{ color: 'darkgray' }}>  {i.productSku}  </td>
                                    <td style={{ color: 'darkgray' }}>  {i.listingId} </td>
                                    <td> {i.OUID} </td>
                                    <td>  <InputField type='number' name='productMRP' id='' placeholder={i.productMrp} size='15' onChange={(e) => PriceData[k].productMrp = e.target.value} />  </td>
                                    <td> <InputField type='number' name='productMOP' id='' placeholder={i.productOfferPrice} size='15' onChange={(e) => PriceData[k].productOfferPrice = e.target.value} /></td>
                                    <td>
                                        <button className='td-mp' value={k} onClick={getPriceInfo} id={k + 'btn-show'} style={btn_mp_show}> More <br /> Prices</button>
                                        <button className='td-mp' value={k} onClick={hidePriceInfo} id={k + 'btn-hide'} style={btn_mp_hide}> More <br /> Prices</button>
                                    </td>
                                </tr>
                                <tr style={dis12} id={k}>
                                    <td colspan='10'>
                                        <Table responsive bordered>
                                            <tbody>
                                                <tr>
                                                    <td className='bold-text'> Diamond Price : </td>
                                                    <td > <InputField type='number' name='DiamondPrice' value={i.DiamondCost} id='' placeholder='' size='25' /> </td>
                                                    <td className='bold-text'> Accessories Cost : </td>
                                                    <td > <InputField type='number' name='AccessoriesCost' value={i.AccessoriesCost} id='' placeholder='' size='25' />  </td>
                                                </tr>
                                                <tr>
                                                    <td className='bold-text'> Gemstone Cost : </td>
                                                    <td > <InputField type='number' name='GemstoneCost' value={i.GemstoneCost} id='' placeholder='' size='25' />  </td>
                                                    <td className='bold-text'> Metal Cost : </td>
                                                    <td > <InputField type='number' name='MetalCost' value={i.MetalCost} id='' placeholder='' size='25' /> </td>
                                                </tr>
                                                <tr>
                                                    <td className='bold-text'> Making Charges : </td>
                                                    <td > <InputField type='number' name='MakingCharges' value={i.MakingCharges} id='' placeholder='' size='25' />  </td>
                                                    <td className='bold-text'>GST Charges :</td>
                                                    <td > <InputField type='number' name='GSTCharges' value={i.GSTCharges} id='' placeholder='' size='25' />  </td>
                                                </tr>
                                                <tr>
                                                    <td className='bold-text'> Wastage Charges : </td>
                                                    <td ><InputField type='number' name='WastageCharges' value={i.WastageCharges} id='' placeholder='' size='25' /> </td>
                                                </tr>
                                            </tbody>
                                        </Table>
                                    </td>
                                </tr>
                            </>
                        ))
                        }
                    </tbody>
                </Table>
                <ThemeProvider theme={theme}>
                    <TablePagination
                        rowsPerPageOptions={[5, 10, 20, 30]}
                        component="div"
                        count={totalCount}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onPageChange={handleChangePage}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                        showFirstButton
                        showLastButton
                        defaultPageSize={5}
                        labelDisplayedRows={({ from, to, count }) => `Page ${page + 1} of ${numberOfPages || 1}`}
                    />
                </ThemeProvider>
            </div>
            <ToastContainer />
        </>
    )
}
export default PriceManagementUpdates;