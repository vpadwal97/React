import React, { useEffect } from 'react';
import { useState } from 'react';
import { Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import FormGroup from '../../../../../forms/FormGroup';
import SelectComponent from '../../../../../forms/SelectComponent';
import FormGroupRadio from '../../../../../forms/FormGroupRadio';
import axios from "../../../../../util/HttpServices";
import SelectComponentCategory from '../../../../../forms/SelectComponentCategory';
import { useSessionStorage } from '../../../../../util/UseSessionStorage';
import { ToastContainer, toast } from 'react-toastify';
import "../../../../../css/Style.css";
import { TooltipMessages } from '../../../../constants/TooltipConstants';

const ComponentScreen1 = ({ handleNext }) => {
    const cs = TooltipMessages.catalogue.product.ProductManagement.ComponentScreen1;
    const [itemInputDataredux, setItemInputDataRedux] = useSessionStorage("itemInputData", JSON.stringify({}));
    const id = window.sessionStorage.getItem("productSchemaSelect");
    const optionvalue = window.sessionStorage.getItem("productSchemaSelectoptionvalue");
    const [productSchema, setProductSchema] = useState("");
    const action = window.localStorage.getItem("action");
    const editData1 = window.sessionStorage.getItem("editData")
    // const editedData = JSON.parse(editData);
    const navigate = useNavigate();
    const [productBrand, setproductBrand] = useState()
    const [productType, setproductType] = useState()
    const [isActive, setIsActive] = useState(true);
    const [isSellable, setIsSellable] = useState(true);
    const [isTryAtHome, setIsTryAtHome] = useState(true);
    const [isTryAtStore, setIsTryAtStore] = useState(true);
    const [isPriceOn, setIsPriceOn] = useState(true);
    const [isTaxApplicable, setIsTaxApplicable] = useState(true);
    const [isTryOn, setIsTryOn] = useState(true);
    const [isInscription, setIsInscription] = useState(true);
    const [isEmiAvailable, setIsEmiAvailable] = useState(true);
    const [isCustomized, setIsCustomized] = useState(true);
    // const initialIsTop = (true);
    const [categoryData, setCategoryData] = useState([]);
    const [childCategoryData, setChildCategoryData] = useState([]);
    const [childCategory2Data, setChildCategory2Data] = useState([]);

    const [selectedCategory, setSelectedCategory] = useState('');
    const [selectedChildCategory, setSelectedChildCategory] = useState('');
    const [selectedChildCategory2, setSelectedChildCategory2] = useState('');

    const [editedData1, setEditedData1] = useState(JSON.parse(editData1))
    window.sessionStorage.setItem("editData", editData1);
    const valueData = action === "edit" ? productSchema : productSchema.keywordName
    const optionschema = action === "edit" ? editedData1.response.schemaCode : optionvalue

    const [inputdata, setInputdata] = useState(
        {   
            schemaCode:optionschema,
            categoryCode: "",
            productName: "",
            productCode: "",
            productTitle: "",
            productDesc: "",
            metaTitle: "",
            productMetaDesc: "",
            metaKeyword: "",
            tags: "",
            supplier: "",
            taxCode: "",
            maxPurchaseQuantity: "",
            minPurchaseQuantity: "",
            isActive: isActive ? 'Y' : 'N',
            isSellable: isSellable ? "1" : "0",
            isTryAtHome: isTryAtHome ? "1" : "0",
            isTryAtStore: isTryAtStore ? "1" : "0",
            isTryOn: isTryOn ? "1" : "0",
            isPriceOn: isPriceOn ? "1" : "0",
            isTaxApplicable: isTaxApplicable ? "1" : "0",
            isInscription: isInscription ? "1" : "0",
            isEmiAvailable: isEmiAvailable ? "1" : "0",
            isCustomized: isCustomized ? "Y" : "N",
        }
    )



    useEffect(() => {
        console.log(editedData1);
        if (action === "edit" && editedData1 && Object.keys(editedData1.response).length > 0) {
            setInputdata({
                ...inputdata,
                categoryCode: editedData1.response.categoryCode ? editedData1.response.categoryCode : "",
                productName: editedData1.response.productName ? editedData1.response.productName : "",
                productCode: editedData1.response.productCode || "",
                productTitle: editedData1.response.productTitle || "",
                productDesc: editedData1.response.productDesc || "",
                metaTitle: editedData1.response.metaTitle || "",
                productMetaDesc: editedData1.response.productMetaDesc || "",
                metaKeyword: editedData1.response.metaKeyword || "",
                tags: editedData1.response.tags || "",
                supplier: editedData1.response.supplier || "",
                taxCode: editedData1.response.taxCode || "",
                maxPurchaseQuantity: editedData1.response.maxPurchaseQuantity || "",
                minPurchaseQuantity: editedData1.response.minPurchaseQuantity || "",
                isActive: editedData1.response.isActive === "Y" ? 'Y' : 'N',
                isSellable: editedData1.response.isSellable === "1" ? '1' : '0',
                isTryAtHome: editedData1.response.isTryAtHome || "",
                isTryAtStore: editedData1.response.isTryAtStore || "",
                isTryOn: editedData1.response.isTryOn || "",
                isPriceOn: editedData1.response.isPriceOn || "",
                isTaxApplicable: editedData1.response.isTaxApplicable || "",
                isInscription: editedData1.response.isInscription || "",
                isEmiAvailable: editedData1.response.isEmiAvailable || "",
                isCustomized: editedData1.response.isCustomized === "Y" ? 'Y' : 'N',
            });
        }
    }, []);


    const getSelectAssociationDataApi = async () => {
        try {
            const response = await
                axios.post("/api/category-attribute-association/get-association-group",
                    { keywordCreationRfnum: id });
            if (action === "create") {
                setProductSchema(response.data)
            }

        } catch (error) {
            console.log(error);
        }
    }

    const getSelectBrandDataApi = async () => {
        try {
            const response = await axios.get("/api/brandList/BrandDropdown")
            setproductBrand(response.data);
        } catch (error) {
            console.log(error);
        }
    }
    const getSelectAtributeDataApi = async () => {
        const formData = new FormData();
        formData.append("schemaID", 1)
        try {
            const response = await
                axios.post("api/product-creation/prefetch-data", formData)
            setproductType(response.data.prodTypeList)
        } catch (error) {
            console.log(error);
        }
    }
   

    const getCategorySelectAPI = async () => {
        try {
            const response = await axios.get("api/category-association-list/topCategory");
            setCategoryData(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    const getChildCategoryDataApi = async (categoryId) => {
        try {
            const response = await axios.post("api/category-attribute-association/all-child-category", {
                cmtcode: categoryId
            });
            setChildCategoryData(response.data);
            setChildCategory2Data(response.data);
        } catch (error) {
            console.error('Error fetching child category data:', error);
        }
    };

    const handleCategoryChange = (event, index) => {
        const selectedCategoryId = event.target.value;
        setSelectedCategory(selectedCategoryId);
        getChildCategoryDataApi(selectedCategoryId);
    };
    const handleInputCategory = (event) => {
        const selectedCategoryId = event.target.value;
        setInputdata({ ...inputdata, categoryCode: selectedCategoryId });
        getChildCategoryDataApi(selectedCategoryId);
    };


    const handleChildCategoryChange = (event, index) => {
        const selectedChildCategoryId = event.target.value;
        // setInputdata({ ...inputdata, categoryCode: selectedCategoryId });
        setSelectedChildCategory(selectedChildCategoryId);
    };

    const handleChildCategory2Change = (event, index) => {
        const selectedChildCategory2Id = event.target.value;
        setSelectedChildCategory2(selectedChildCategory2Id);
    };


    useEffect(() => {
        getCategorySelectAPI();
        getSelectBrandDataApi();
        getSelectAtributeDataApi();
        getSelectAssociationDataApi();
    }, [])

    const handleInputProductedit = (event, i) => {
        var d = { ...editedData1 };
        d.response.productName = event.target.value;
        setEditedData1(d);
    };

    const handleInputProductcodeedit = (event, i) => {
        var d = { ...editedData1 };
        d.response.productCode = event.target.value;
        setEditedData1(d);
    };
    const handleInputProductTitleedit = (event, i) => {
        var d = { ...editedData1 };
        d.response.productTitle = event.target.value;
        setEditedData1(d);
    };
    const handleInputProductDescedit = (event, i) => {
        var d = { ...editedData1 };
        d.response.productDesc = event.target.value;
        setEditedData1(d);
    };
    const handleInputSeoMetaTitleedit = (event, i) => {
        var d = { ...editedData1 };
        d.response.metaTitle = event.target.value;
        setEditedData1(d);
    };
    const handleInputSeoMetaDescedit = (event, i) => {
        var d = { ...editedData1 };
        d.response.productMetaDesc = event.target.value;
        setEditedData1(d);
    };
    const handleInputSeoMetaKeywordedit = (event, i) => {
        var d = { ...editedData1 };
        d.response.metaKeyword = event.target.value;
        setEditedData1(d);
    };
    const handleInputTAGSedit = (event, i) => {
        var d = { ...editedData1 };
        d.response.tags = event.target.value;
        setEditedData1(d);
    };
    const handleInputTaxcodeedit = (event, i) => {
        var d = { ...editedData1 };
        d.response.taxCode = event.target.value;
        setEditedData1(d);
    };
    const handleInputSupplieredit = (event, i) => {
        var d = { ...editedData1 };
        d.response.supplier = event.target.value;
        setEditedData1(d);
    };
    const handleInputMinPurchaseedit = (event, i) => {
        var d = { ...editedData1 };
        d.response.minPurchaseQuantity = event.target.value;
        setEditedData1(d);
    };
    const handleInputMaxPurchaseedit = (event, i) => {
        var d = { ...editedData1 };
        d.response.maxPurchaseQuantity = event.target.value;
        setEditedData1(d);
    };
    const handleIsActive = () => {
        const newIsChecked = !isActive;
        setIsActive(newIsChecked);
        const newIsActive = newIsChecked ? 'Y' : 'N';
        setInputdata({ ...inputdata, isActive: newIsActive })

    }
    const handleIsActiveEdit = () => {
        var d = {...editedData1}
        d.response.isActive = d.response.isActive === "Y" ? "N" :"Y"
        setEditedData1(d);
      };
      const handleIsPublishEdit = () => {
        var d = {...editedData1}
        d.response.isSellable = d.response.isSellable === "1" ? "0" :"1"
        setEditedData1(d);
      };
      const handleIsTryAtHomeEdit = () => {
        var d = {...editedData1}
        d.response.isTryAtHome = d.response.isTryAtHome === "1" ? "0" :"1"
        setEditedData1(d);
      };
      const handleIsTryAtStoreEdit = () => {
        var d = {...editedData1}
        d.response.isTryAtStore = d.response.isTryAtStore === "1" ? "0" :"1"
        setEditedData1(d);
      };
      const handleIsPriceOnReqEdit = () => {
        var d = {...editedData1}
        d.response.isPriceOn = d.response.isPriceOn === "1" ? "0" :"1"
        setEditedData1(d);
      };
      const handleIsTryOnReqEdit = () => {
        var d = {...editedData1}
        d.response.isTryOn = d.response.isTryOn === "1" ? "0" :"1"
        setEditedData1(d);
      };
      const handleIsTaxApplicableEdit = () => {
        var d = {...editedData1}
        d.response.isTaxApplicable = d.response.isTaxApplicable === "1" ? "0" :"1"
        setEditedData1(d);
      };
      const handleIsInscriptionEdit = () => {
        var d = {...editedData1}
        d.response.isInscription = d.response.isInscription === "1" ? "0" :"1"
        setEditedData1(d);
      };
      const handleIsEmiAvailableEdit = () => {
        var d = {...editedData1}
        d.response.isEmiAvailable = d.response.isEmiAvailable === "1" ? "0" :"1"
        setEditedData1(d);
      };
      const handleIsCustomizationEdit = () => {
        var d = {...editedData1}
        d.response.isCustomized = d.response.isCustomized === "Y" ? "N" :"Y"
        setEditedData1(d);
      };
    const handleIsPublish = () => {
        const newIsChecked = !isSellable;
        setIsSellable(newIsChecked);
        const newIsPublish = newIsChecked ? '1' : '0';
        setInputdata({ ...inputdata, isSellable: newIsPublish }) 

    }

    const handleIsTryAtHome = () => {
        const newIsChecked = !isTryAtHome;
        setIsTryAtHome(newIsChecked);
        const newIsTryAtHome = newIsChecked ? '1' : '0';
        setInputdata({ ...inputdata, isTryAtHome: newIsTryAtHome })
    }
    const handleIsTryAtStore = () => {
        const newIsChecked = !isTryAtStore;
        setIsTryAtStore(newIsChecked);
        const newIsTryAtStore = newIsChecked ? '1' : '0';
        setInputdata({ ...inputdata, isTryAtStore: newIsTryAtStore })
    }
    const handleIsTryOn = () => {
        const newIsChecked = !isTryOn;
        setIsTryOn(newIsChecked);
        const newIsTryOn = newIsChecked ? '1' : '0';
        setInputdata({ ...inputdata, isTryOn: newIsTryOn })
    }
    const handleIsPriceOnREQ = () => {
        const newIsChecked = !isPriceOn;
        setIsPriceOn(newIsChecked);
        const newIsPriceOnReq = newIsChecked ? '1' : '0';
        setInputdata({ ...inputdata, isPriceOn: newIsPriceOnReq })
    }
    const handleIsTaxApplicable = () => {
        const newIsChecked = !isTaxApplicable;
        setIsTaxApplicable(newIsChecked);
        const newIsTaxApplicable = newIsChecked ? '1' : '0';
        setInputdata({ ...inputdata, isTaxApplicable: newIsTaxApplicable })
    }
    const handleIsInscription = () => {
        const newIsChecked = !isInscription;
        setIsInscription(newIsChecked);
        const newIsInscription = newIsChecked ? '1' : '0';
        setInputdata({ ...inputdata, isInscription: newIsInscription })
    }
    const handleIsEmiAvailable = () => {
        const newIsChecked = !isEmiAvailable;
        setIsEmiAvailable(newIsChecked);
        const newIsEmiAvailable = newIsChecked ? '1' : '0';
        setInputdata({ ...inputdata, isEmiAvailable: newIsEmiAvailable })
    }
    const handleIsCustomizable = () => {
        const newIsChecked = !isCustomized;
        setIsCustomized(newIsChecked);
        const newIsCustomizable = newIsChecked ? '1' : '0';
        setInputdata({ ...inputdata, isCustomized: newIsCustomizable })
    }

    const handleData = () => {
        setItemInputDataRedux(JSON.stringify(inputdata));
        window.sessionStorage.setItem("editDataComponent1", JSON.stringify(editedData1));

        // if (!inputdata.productCode) {
        //     toast.error('Product Code is required.');
        //     return;
        // }
        // if (!inputdata.categoryCode) {
        //     toast.error('Category is required.');
        //     return;
        //   }
        //   if (!inputdata.productBrand) {
        //     toast.error('Product Brand is required.');
        //     return;
        //   }
        handleNext();
    }

    return (
        <>
            {action === "edit" ?
                <>
                    <div>
                        <div className='mx-5 my-4'>
                            <div className='row'>
                                <div className='col-lg-12'>
                                    <div className="border border-bottom-0 border-2 text-end p-2" style={{ borderColor: "#2196f3" }}>
                                        <div className="mx-5 my-2 text-end">
                                            <a className="btn btn-sm m-1 px-3 py-1 rounded-3" style={{ background: "#349f01", color: "white", fontWeight: "bold" }}>Add Brand</a>
                                            <a className="btn btn-sm m-1 px-3 py-1 rounded-3 me-0" style={{ background: "#349f01", color: "white", fontWeight: "bold" }} onClick={() => navigate("/attribute/createAttributeMaster")}>Add Manufacturer</a>
                                            <a className="btn btn-sm m-1 px-3 py-1 rounded-3 me-0" style={{ background: "#349f01", color: "white", fontWeight: "bold" }} onClick={() => navigate("/attribute/createAttributeMaster")}>Add Category</a>
                                            <a className="btn btn-sm m-1 px-3 py-1 rounded-3 me-0" style={{ background: "#349f01", color: "white", fontWeight: "bold" }} onClick={() => navigate("/attribute/createAttributeMaster")}>Bulk Load</a>
                                            <a className="btn btn-sm m-1 px-3 py-1 rounded-3 me-0" style={{ background: "#349f01", color: "white", fontWeight: "bold" }} onClick={() => navigate("/product/searchProductManagement")}>Cancel</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="p-3 border border-2 border-cPrimary">
                                <div id="schemas">
                                    <div className id="schema-1">
                                        <div className="p-2 border ">
                                            <div className="p-1 border">
                                                <div className="row col-lg-12">
                                                    <div id="list-tab" role="tablist" className="w-100 d-flex flex-md-row flex-column">
                                                        <Link type="button" disabled className="w-100 text-center py-3 btn-nav position-relative text-white fw-bold active">Basic Info
                                                        </Link>
                                                        <Link type="button" disabled className="w-100 text-center py-3 btn-nav position-relative text-white fw-bold ">Variants
                                                        </Link>
                                                        <Link type="button" disabled className="w-100 text-center py-3 btn-nav position-relative text-white fw-bold ">More Attributes
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='details'>
                                                <div className='contact'>
                                                    <div className='form-floating'>


                                                        <div className='box'>
                                                            <Form encType="multipart/form-data" className="px-3" >
                                                                <div className="row">
                                                                    <div className="col-md-4 mt-3"><FormGroup type="text" label="Product Schema" placeholder="" value={editedData1.response.schemaCode} tooltipMessage={cs.schemaCode} disabled /></div>
                                                                </div>
                                                                <div className='row'>

                                                                    <div className="col-md-4 mt-3">
                                                                        <SelectComponent
                                                                            required="required"
                                                                            placeholder="Category"
                                                                            value={inputdata.categoryCode}
                                                                            onChange={(event) => {
                                                                                handleCategoryChange(event);
                                                                                handleInputCategory(event);
                                                                            }}
                                                                            dropdownlist={categoryData} tooltipMessage={cs.categoryData}
                                                                            disabled
                                                                        />
                                                                    </div>
                                                                    {selectedCategory.length > 0 ?
                                                                        <div className="col-md-4 mt-3">
                                                                            <SelectComponentCategory
                                                                                required="required"
                                                                                placeholder="Child Category"
                                                                                onChange={(event) => handleChildCategoryChange(event)}
                                                                                dropdownlist={childCategoryData} tooltipMessage={cs.childCategoryData}
                                                                            />
                                                                        </div> : null}
                                                                    {selectedChildCategory.length > 0 ?
                                                                        <div className="col-md-4 mt-3">
                                                                            <SelectComponentCategory
                                                                                placeholder="Child Category 2"
                                                                                onChange={(event) => handleChildCategory2Change(event)}
                                                                                dropdownlist={childCategory2Data} tooltipMessage={cs.childCategory2Data}
                                                                            />
                                                                        </div> : null}
                                                                </div>

                                                                <div className='row'>
                                                                    <div className="col-md-4 mt-3"><FormGroup required="required" type="text" label="Product Name" value={editedData1.response.productName} tooltipMessage={cs.productName} onChange={(event) => handleInputProductedit(event)} /></div>
                                                                    <div className="col-md-4 mt-3"><FormGroup required="required" type="text" label="Product Code" value={editedData1.response.productCode} tooltipMessage={cs.productCode} onChange={(event) => handleInputProductcodeedit(event)} /></div>
                                                                    <div className="col-md-4 mt-3"><FormGroup required="required" type="text" label="Product Title" value={editedData1.response.productTitle} tooltipMessage={cs.productTitle} onChange={(event) => handleInputProductTitleedit(event)} /></div>
                                                                    <div className="col-md-4 mt-3"><FormGroup required="required" type="text" label="Product Description" value={editedData1.response.productDesc} tooltipMessage={cs.productDesc} onChange={(event) => handleInputProductDescedit(event)} /></div>
                                                                    <div className="col-md-4 mt-3"><SelectComponent placeholder="Brand"
                                                                        onChange={(event) => setInputdata({ ...inputdata, productBrand: event.target.value })} dropdownlist={productBrand} value={editedData1.response.productBrand} tooltipMessage={cs.productBrand} />
                                                                    </div>
                                                                    <div className="col-md-4 mt-3"><SelectComponent placeholder="Article Type"
                                                                        onChange={(event) => setInputdata({ ...inputdata, productType: event.target.value })} dropdownlist={productType} value={editedData1.response.productType} tooltipMessage={cs.productType} />
                                                                    </div>
                                                                    <div className="col-md-4 mt-3"><FormGroup type="text" label="Seo Meta Title" placeholder="" value={editedData1.response.metaTitle} tooltipMessage={cs.metaTitle} onChange={(event) => handleInputSeoMetaTitleedit(event)} /></div>
                                                                    <div className="col-md-4 mt-3"><FormGroup type="text" label="Seo Meta Description" placeholder="" value={editedData1.response.productMetaDesc} tooltipMessage={cs.productMetaDesc} onChange={(event) => handleInputSeoMetaDescedit(event)} /></div>
                                                                    <div className="col-md-4 mt-3"><FormGroup type="text" label="Seo Meta Keyword" placeholder="" value={editedData1.response.metaKeyword} tooltipMessage={cs.metaKeyword} onChange={(event) => handleInputSeoMetaKeywordedit(event)} /></div>
                                                                    <div className="col-md-4 mt-3"><FormGroup type="text" label="Tags" placeholder="" value={editedData1.response.tags} tooltipMessage={cs.tags} onChange={(event) => handleInputTAGSedit(event)} /></div>
                                                                    <div className="col-md-4 mt-3"><FormGroup type="text" label="Supplier" placeholder="" value={editedData1.response.supplier} tooltipMessage={cs.supplier} onChange={(event) => handleInputSupplieredit(event)} /></div>
                                                                    <div className="col-md-4 mt-3"><FormGroup type="text" label="Tax Code" placeholder="" value={editedData1.response.taxCode} tooltipMessage={cs.taxCode} onChange={(event) => handleInputTaxcodeedit(event)} /></div>
                                                                    <div className="col-md-4 mt-3"><FormGroup type="text" label="Min Purchase Quantity" placeholder="" value={editedData1.response.minPurchaseQuantity} tooltipMessage={cs.minPurchaseQuantity} onChange={(event) => handleInputMinPurchaseedit(event)} /></div>
                                                                    <div className="col-md-4 mt-3"><FormGroup type="text" label="Max Purchase Quantity" placeholder="" value={editedData1.response.maxPurchaseQuantity} tooltipMessage={cs.maxPurchaseQuantity} onChange={(event) => handleInputMaxPurchaseedit(event)} /></div>
                                                                    <div className="col-md-2 mt-3">
                                                                        <FormGroupRadio
                                                                            title="Is Active"
                                                                            tooltipMessage={cs.isActive} checked ={editedData1.response.isActive ===  "Y" ? true : false}
                                                                            value={editedData1.response.isActive === "Y" ? true : false}
                                                                            onChange={() => { handleIsActiveEdit()}}
                                                                        />
                                                                    </div>
                                                                    <div className='col-md-2 mt-3'>
                                                                        <FormGroupRadio type="text" title="Is Publish" 
                                                                        tooltipMessage={cs.isSellable} checked ={editedData1.response.isSellable ===  "1" ? true : false}
                                                                        value={editedData1.response.isSellable === "1" ? true : false} 
                                                                        onChange={() => { handleIsPublishEdit() }} />
                                                                    </div>
                                                                    <div className='col-md-2 mt-3'>
                                                                        <FormGroupRadio type="text" title="Is Try At Home"
                                                                        tooltipMessage={cs.isTryAtHome} checked ={editedData1.response.isTryAtHome ===  "1" ? true : false}
                                                                        value={editedData1.response.isTryAtHome === "1" ? true : false} 
                                                                          onChange={() => { handleIsTryAtHomeEdit() }} />
                                                                    </div>
                                                                    <div className='col-md-2 mt-3'>
                                                                        <FormGroupRadio type="text" title="Is Try At Store" 
                                                                        tooltipMessage={cs.isTryAtStore} checked ={editedData1.response.isTryAtStore ===  "1" ? true : false}
                                                                        value={editedData1.response.isTryAtStore === "1" ? true : false}
                                                                        onChange={() => { handleIsTryAtStoreEdit() }} />
                                                                    </div>
                                                                    <div className='col-md-2 mt-3'>
                                                                        <FormGroupRadio type="text" title="Is Price On Request" 
                                                                        tooltipMessage={cs.isPriceOn} checked ={editedData1.response.isPriceOn ===  "1" ? true : false}
                                                                        value={editedData1.response.isPriceOn === "1" ? true : false}
                                                                        onChange={() => { handleIsPriceOnReqEdit() }} />
                                                                    </div>
                                                                    <div className='col-md-2 mt-3'>
                                                                        <FormGroupRadio type="text" title="Is Try On" 
                                                                        tooltipMessage={cs.isTryOn} checked ={editedData1.response.isTryOn ===  "1" ? true : false}
                                                                        value={editedData1.response.isTryOn === "1" ? true : false}
                                                                        onChange={() => { handleIsTryOnReqEdit() }} />
                                                                    </div>
                                                                    <div className='col-md-2 mt-3'>
                                                                        <FormGroupRadio type="text" title="Is Tax Applicable" 
                                                                        tooltipMessage={cs.isTaxApplicable} checked ={editedData1.response.isTaxApplicable ===  "1" ? true : false}
                                                                        value={editedData1.response.isTaxApplicable === "1" ? true : false} 
                                                                        onChange={() => { handleIsTaxApplicableEdit() }} />
                                                                    </div>
                                                                    <div className='col-md-2 mt-3'>
                                                                        <FormGroupRadio type="text" title="Is Inscription" 
                                                                         tooltipMessage={cs.isInscription} checked ={editedData1.response.isInscription ===  "1" ? true : false}
                                                                         value={editedData1.response.isInscription === "1" ? true : false}  
                                                                        onChange={() => { handleIsInscriptionEdit() }} />
                                                                    </div>
                                                                    <div className='col-md-2 mt-3'>
                                                                        <FormGroupRadio type="text" title="Is Emi Available" 
                                                                         tooltipMessage={cs.isEmiAvailable} checked ={editedData1.response.isEmiAvailable ===  "1" ? true : false}
                                                                         value={editedData1.response.isEmiAvailable === "1" ? true : false} 
                                                                         onChange={() => { handleIsEmiAvailableEdit() }} />
                                                                    </div>
                                                                    <div className='col-md-2 mt-3'>
                                                                        <FormGroupRadio type="text" title="Is Customization" 
                                                                         checked ={editedData1.response.isCustomized === "Y" ? true : false}
                                                                         value={editedData1.response.isCustomized === "Y" ? true : false} 
                                                                        onChange={() => { handleIsCustomizationEdit() }} />
                                                                    </div>
                                                                </div>
                                                            </Form>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='row'>
                            <div className='col-lg-12'>
                                <div className="text-end p-2" style={{ borderColor: "#2196f3" }}>
                                    <div className="mx-5 my-2 text-end">
                                        <a className="btn btn-md m-1 px-5 py-1 rounded-3 me-0"
                                            style={{ background: "#349f01", color: "white", fontWeight: "bold" }}
                                            onClick={handleData}>Next</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                </> :
                <>


                    <div>
                        <div className='mx-5 my-4'>
                            <div className='row'>
                                <div className='col-lg-12'>
                                    <div className="border border-bottom-0 border-2 text-end p-2" style={{ borderColor: "#2196f3" }}>
                                        <div className="mx-5 my-2 text-end">
                                            <a className="btn btn-sm m-1 px-3 py-1 rounded-3" style={{ background: "#349f01", color: "white", fontWeight: "bold" }}>Add Brand</a>
                                            <a className="btn btn-sm m-1 px-3 py-1 rounded-3 me-0" style={{ background: "#349f01", color: "white", fontWeight: "bold" }} onClick={() => navigate("/attribute/createAttributeMaster")}>Add Manufacturer</a>
                                            <a className="btn btn-sm m-1 px-3 py-1 rounded-3 me-0" style={{ background: "#349f01", color: "white", fontWeight: "bold" }} onClick={() => navigate("/attribute/createAttributeMaster")}>Add Category</a>
                                            <a className="btn btn-sm m-1 px-3 py-1 rounded-3 me-0" style={{ background: "#349f01", color: "white", fontWeight: "bold" }} onClick={() => navigate("/attribute/createAttributeMaster")}>Bulk Load</a>
                                            <a className="btn btn-sm m-1 px-3 py-1 rounded-3 me-0" style={{ background: "#349f01", color: "white", fontWeight: "bold" }} onClick={() => navigate("/product/searchProductManagement")}>Cancel</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="p-3 border border-2 border-cPrimary">
                                <div id="schemas">
                                    <div className id="schema-1">
                                        <div className="p-2 border ">
                                            <div className="p-1 border">
                                                <div className="row col-lg-12">
                                                    <div id="list-tab" role="tablist" className="w-100 d-flex flex-md-row flex-column">
                                                        <Link type="button" disabled className="w-100 text-center py-3 btn-nav position-relative text-white fw-bold active">Basic Info
                                                        </Link>
                                                        <Link type="button" disabled className="w-100 text-center py-3 btn-nav position-relative text-white fw-bold ">Variants
                                                        </Link>
                                                        <Link type="button" disabled className="w-100 text-center py-3 btn-nav position-relative text-white fw-bold ">More Attributes
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <Form encType="multipart/form-data" className="px-3" >
                                                    <div className="row">
                                                        <div className="col-md-4 mt-3"><FormGroup type="text" label="Product Schema" placeholder="" value={valueData} tooltipMessage={cs.schemaCode} disabled /></div>
                                                    </div>
                                                    <div className='row'>

                                                        <div className="col-md-4 mt-3">
                                                            <SelectComponent
                                                                required="required"
                                                                placeholder="Category"
                                                                onChange={(event) => {
                                                                    handleCategoryChange(event);
                                                                    handleInputCategory(event);
                                                                }}
                                                                dropdownlist={categoryData} tooltipMessage={cs.categoryData}
                                                            />
                                                        </div>
                                                        {selectedCategory.length > 0 ?
                                                            <div className="col-md-4 mt-3">
                                                                <SelectComponentCategory
                                                                    required="required"
                                                                    placeholder="Child Category"
                                                                    onChange={(event) => handleChildCategoryChange(event)}
                                                                    dropdownlist={childCategoryData} tooltipMessage={cs.childCategoryData}
                                                                />
                                                            </div> : null}
                                                        {selectedChildCategory.length > 0 ?
                                                            <div className="col-md-4 mt-3">
                                                                <SelectComponentCategory
                                                                    placeholder="Child Category 2"
                                                                    onChange={(event) => handleChildCategory2Change(event)}
                                                                    dropdownlist={childCategory2Data} tooltipMessage={cs.childCategory2Data}
                                                                />
                                                            </div> : null}
                                                    </div>

                                                    <div className='row'>
                                                        <div className="col-md-4 mt-3"><FormGroup required="required" type="text" label="Product Name" placeholder="" value={inputdata.productName} tooltipMessage={cs.productName} onChange={(event) => setInputdata({ ...inputdata, productName: event.target.value })} /></div>
                                                        <div className="col-md-4 mt-3"><FormGroup required="required" type="text" label="Product Code" placeholder="" value={inputdata.productCode} tooltipMessage={cs.productCode} onChange={(event) => setInputdata({ ...inputdata, productCode: event.target.value })} /></div>
                                                        <div className="col-md-4 mt-3"><FormGroup required="required" type="text" label="Product Title" placeholder="" value={inputdata.productTitle} tooltipMessage={cs.productTitle} onChange={(event) => setInputdata({ ...inputdata, productTitle: event.target.value })} /></div>
                                                        <div className="col-md-4 mt-3"><FormGroup required="required" type="text" label="Product Description" placeholder="" value={inputdata.productDesc} tooltipMessage={cs.productDesc} onChange={(event) => setInputdata({ ...inputdata, productDesc: event.target.value })} /></div>
                                                        <div className="col-md-4 mt-3"><SelectComponent placeholder="Brand" required="required"
                                                            onChange={(event) => setInputdata({ ...inputdata, productBrand: event.target.value })} dropdownlist={productBrand} tooltipMessage={cs.productBrand} />
                                                        </div>
                                                        <div className="col-md-4 mt-3"><SelectComponent placeholder="Article Type" required="required"
                                                            onChange={(event) => setInputdata({ ...inputdata, productType: event.target.value })} dropdownlist={productType} tooltipMessage={cs.productType} />
                                                        </div>
                                                        <div className="col-md-4 mt-3"><FormGroup type="text" label="Seo Meta Title" placeholder="" value={inputdata.metaTitle} tooltipMessage={cs.metaTitle} onChange={(event) => setInputdata({ ...inputdata, metaTitle: event.target.value })} /></div>
                                                        <div className="col-md-4 mt-3"><FormGroup type="text" label="Seo Meta Description" placeholder="" value={inputdata.productMetaDesc} tooltipMessage={cs.productMetaDesc} onChange={(event) => setInputdata({ ...inputdata, productMetaDesc: event.target.value })} /></div>
                                                        <div className="col-md-4 mt-3"><FormGroup type="text" label="Seo Meta Keyword" placeholder="" value={inputdata.metaKeyword} tooltipMessage={cs.metaKeyword} onChange={(event) => setInputdata({ ...inputdata, metaKeyword: event.target.value })} /></div>
                                                        <div className="col-md-4 mt-3"><FormGroup type="text" label="Tags" placeholder="" value={inputdata.tags}  tooltipMessage={cs.tags} onChange={(event) => setInputdata({ ...inputdata, tags: event.target.value })} /></div>
                                                        <div className="col-md-4 mt-3"><FormGroup type="text" label="Supplier" placeholder="" value={inputdata.supplier} tooltipMessage={cs.supplier} onChange={(event) => setInputdata({ ...inputdata, supplier: event.target.value })} /></div>
                                                        <div className="col-md-4 mt-3"><FormGroup type="text" label="Tax Code" placeholder="" value={inputdata.taxCode} tooltipMessage={cs.taxCode} onChange={(event) => setInputdata({ ...inputdata, taxCode: event.target.value })} /></div>
                                                        <div className="col-md-4 mt-3"><FormGroup type="text" label="Min Purchase Quantity" placeholder="" value={inputdata.minPurchaseQuantity} tooltipMessage={cs.minPurchaseQuantity} onChange={(event) => setInputdata({ ...inputdata, minPurchaseQuantity: event.target.value })} /></div>
                                                        <div className="col-md-4 mt-3"><FormGroup type="text" label="Max Purchase Quantity" placeholder="" value={inputdata.maxPurchaseQuantity} tooltipMessage={cs.maxPurchaseQuantity} onChange={(event) => setInputdata({ ...inputdata, maxPurchaseQuantity: event.target.value })} /></div>
                                                        <div className='col-md-2 mt-3'>
                                                            <FormGroupRadio title="Is Active" checked={isActive} tooltipMessage={cs.isActive} onChange={() => { handleIsActive() }} />
                                                        </div>
                                                        <div className='col-md-2 mt-3'>
                                                            <FormGroupRadio type="text" title="Is Sellable" checked={isSellable} tooltipMessage={cs.isSellable} onChange={() => { handleIsPublish() }} />
                                                        </div>
                                                        <div className='col-md-2 mt-3'>
                                                            <FormGroupRadio type="text" title="Is Try At Home" checked={isTryAtHome} tooltipMessage={cs.isTryAtHome} onChange={() => { handleIsTryAtHome() }} />
                                                        </div>
                                                        <div className='col-md-2 mt-3'>
                                                            <FormGroupRadio type="text" title="Is Try At Store" checked={isTryAtStore} tooltipMessage={cs.isTryAtStore} onChange={() => { handleIsTryAtStore() }} />
                                                        </div>
                                                        <div className='col-md-2 mt-3'>
                                                            <FormGroupRadio type="text" title="Is Price On Request" checked={isPriceOn} tooltipMessage={cs.isPriceOn} onChange={() => { handleIsPriceOnREQ() }} />
                                                        </div>
                                                        <div className='col-md-2 mt-3'>
                                                            <FormGroupRadio type="text" title="Is Try On" checked={isTryOn} tooltipMessage={cs.isTryOn} onChange={() => { handleIsTryOn() }} />
                                                        </div>
                                                        <div className='col-md-2 mt-3'>
                                                            <FormGroupRadio type="text" title="Is Tax Applicable" checked={isTaxApplicable} tooltipMessage={cs.isTaxApplicable} onChange={() => { handleIsTaxApplicable() }} />
                                                        </div>
                                                        <div className='col-md-2 mt-3'>
                                                            <FormGroupRadio type="text" title="Is Inscription" checked={isInscription} tooltipMessage={cs.isInscription} onChange={() => { handleIsInscription() }} />
                                                        </div>
                                                        <div className='col-md-2 mt-3'>
                                                            <FormGroupRadio type="text" title="Is Emi Available" checked={isEmiAvailable} tooltipMessage={cs.isEmiAvailable} onChange={() => { handleIsEmiAvailable() }} />
                                                        </div>
                                                        <div className='col-md-2 mt-3'>
                                                            <FormGroupRadio type="text" title="Is Customization" checked={isCustomized} tooltipMessage={cs.isCustomized} onChange={() => { handleIsCustomizable() }} />
                                                        </div>
                                                    </div>
                                                </Form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <ToastContainer />
                            </div>
                        </div>

                        <div className='row'>
                            <div className='col-lg-12'>
                                <div className="text-end p-2" style={{ borderColor: "#2196f3" }}>
                                    <div className="mx-5 my-2 text-end">
                                        <a className="btn btn-md m-1 px-5 py-1 rounded-3 me-0"
                                            style={{ background: "#349f01", color: "white", fontWeight: "bold" }}
                                            onClick={handleData}>Next</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </>
            }
        </>
    )
}

export default ComponentScreen1