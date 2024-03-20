import React, { useState, useEffect } from 'react'
import axios from "../../../../../util/HttpServices";
import { Button, Form } from 'react-bootstrap';
import FormGroup from '../../../../../forms/FormGroup'
import LogoIcons from '../../../../../forms/LogoIcons';
import { Link, useNavigate } from 'react-router-dom';
import FormGroupRadio from '../../../../../forms/FormGroupRadio';
import SelectComponent from '../../../../../forms/SelectComponent';
import { useSessionStorage } from '../../../../../util/UseSessionStorage';
import { TooltipMessages } from '../../../../constants/TooltipConstants';

const ComponentScreen2 = ({ handleNext, handleBack }) => {
    const cs = TooltipMessages.catalogue.product.ProductManagement.ComponentScreen2;
    const [itemListredux, setItemListRedux] = useSessionStorage("itemlist", JSON.stringify({}));
    const navigate = useNavigate();
    const [sellerData, setsellerData] = useState()
    const [storeCodeData, setstoreCodeData] = useState();
    const [isFreeShipping, setisFreeShipping] = useState(true);
    const [isGiftWrap, setisGiftWrap] = useState(true);
    const [isCancellable, setisCancellable] = useState(true);
    const [isReturnable, setisReturnable] = useState(true);
    const [ispickAtStore, setIsPickAtStore] = useState(true);
    const [isNewArrival, setIsNewArrival] = useState(true);
    const [attribute, setAtrribute] = useState([])
    const id = window.sessionStorage.getItem("productSchemaSelect");
    const [productSchema, setProductSchema] = useState("");
    const action = window.localStorage.getItem("action");
    const editData = window.sessionStorage.getItem("editData");
    // const editedData = JSON.parse(editData);
    const [editedData, setEditedData] = useState(JSON.parse(editData));
    // window.sessionStorage.setItem("editData3", editData);

    // const variantMap = action === "edit" ? editedData.response.schemaCode : variantMap: { kcaRfnumValues: [] },
  

    console.log(editedData);

    const [inputList, setInputList] = useState([
        {
            vendorCode: "",
            itemName: "",
            articleDesc: "",
            itemSku: "",
            articleCodeTex: "",
            storeCode: "",
            pilrfnum: "",
            variantMap: { kcaRfnumValues: []},
            plpImageNameList: [{
                selectedImage: null
            }],
            pdpImageNameList: [{
                selectedImage: null
            }],
            isFreeShipping: isFreeShipping ? "Y" : "N",
            isGiftWrap: isGiftWrap ? "Y" : "N",
            isCancellable: isCancellable ? "Y" : "N",
            isReturnable: isReturnable ? "Y" : "N",
            isPickAtStore: ispickAtStore ? "Y" : "N",
            isNewArrival: isNewArrival ? "Y" : "N",
        }
    ])

    const handleListAdd = () => {
        setInputList([
            ...inputList,
            {
                itemName: "",
                articleDesc: "",
                itemSku: "",
                articleCodeTex: "",
                storeCode: "",
                variantMap: { kcaRfnumValues:[] },
                plpImageNameList: [{
                    selectedImage: null
                }],
                pdpImageNameList: [{
                    selectedImage: null
                }],
                isFreeShipping: isFreeShipping ? "Y" : "N",
                isGiftWrap: isGiftWrap ? "Y" : "N",
                isCancellable: isCancellable ? "Y" : "N",
                isReturnable: isReturnable ? "Y" : "N",
                isPickAtStore: ispickAtStore ? "Y" : "N",
                isNewArrival: isNewArrival ? "Y" : "N",
            }
        ])
    }
    useEffect(() => {
        console.log('inputList:', inputList);
    }, [inputList]);

    const handleInputItemNameedit = (event, index) => {
        var d = { ...editedData };
        d.response.itemBeanList[index].itemName = event.target.value;
        setEditedData(d);
    };

    const handleInputArticleDescEdit = (event, index) => {
        var d = { ...editedData };
        d.response.itemBeanList[index].articleDesc = event.target.value;
        setEditedData(d);
    };
    const handleInputArticleCodeEdit = (event, index) => {
        var d = { ...editedData };
        d.response.itemBeanList[index].articleCodeTex = event.target.value;
        setEditedData(d);
    };
    const handleInputItemSkuEdit = (event, index) => {
        var d = { ...editedData };
        d.response.itemBeanList[index].itemSku = event.target.value;
        setEditedData(d);
    };
    const handleInputItemName = (event, index) => {
        const newInputList = [...inputList];
        newInputList[index].itemName = event.target.value;
        setInputList(newInputList);
    };
    const handleInputArticleDesc = (event, index) => {
        const newInputList = [...inputList];
        newInputList[index].articleDesc = event.target.value;
        setInputList(newInputList);
    };
    const handleInputArticleCode = (event, index) => {
        const newInputList = [...inputList];
        newInputList[index].articleCodeTex = event.target.value;
        setInputList(newInputList);
    };
    const handleInputItemSku = (event, index) => {
        const newInputList = [...inputList];
        newInputList[index].itemSku = event.target.value;
        setInputList(newInputList);
    };


    const handleInputSeller = (event, index) => {
        const selectedSellerId = event.target.value;
        const updatedInputList = [...inputList];
        updatedInputList[index].vendorCode = selectedSellerId;
        updatedInputList[index].storeCode = "";
        setInputList(updatedInputList);
        getSelectStoreDataApi(selectedSellerId);
    };


    const handleInputStoreEdit = (event, index) => {
        const selectedSellerId = event.target.value;
        const updatedInputList = [...editedData.response.itemBeanList]; // Assuming this is your data structure
        updatedInputList[index].storeCode = selectedSellerId;
        const updatedData = { ...editedData, response: { ...editedData.response, itemBeanList: updatedInputList } }; // Assuming editedData is an object with a response property containing itemBeanList
        setEditedData(updatedData);

    };

    const handleInputSellerEdit = (event, index) => {
        const selectedSellerId = event.target.value;
        const updatedInputList = [...editedData.response.itemBeanList]; // Assuming this is your data structure
        updatedInputList[index].vendorCode = selectedSellerId;
        updatedInputList[index].storeCode = "";
        const updatedData = { ...editedData, response: { ...editedData.response, itemBeanList: updatedInputList } }; // Assuming editedData is an object with a response property containing itemBeanList
        setEditedData(updatedData);
        getSelectStoreDataApi(selectedSellerId);
    };


    const handleInputStore = (event, index) => {
        const selectedStoreCode = event.target.value;
        const updatedInputList = [...inputList];

        // Ensure the index is within the bounds of the array
        if (index >= 0 && index < updatedInputList.length) {
            updatedInputList[index].storeCode = selectedStoreCode;
            setInputList(updatedInputList);
        }
    };

    const handleInputAtrribute = (event, kcaRfnum) => {
        const { value } = event.target;
        setInputList((prevInputList) => {
            return prevInputList.map((item) => {
                return {
                    ...item,
                    variantMap: {
                        ...item.variantMap,
                        [kcaRfnum]: value,
                    },
                };
            });
        });
    };
    const handleInputAtrributeEdit = (newValue, kcaRfnum, kcaRfnumValues) => {
        setInputList((prevInputList) => {
            const updatedInputList = prevInputList.map((item) => {
                if (item.variantMap && Object.keys(item.variantMap).includes(kcaRfnum.toString())) {
                    const updatedVariantMap = {
                        ...item.variantMap,
                        [kcaRfnum]: newValue,
                        kcaRfnumValues: kcaRfnumValues, // Update kcaRfnumValues
                    };
                    const updatedItem = {
                        ...item,
                        variantMap: updatedVariantMap,
                    };
    
                    console.log("Updated Item:", updatedItem);
    
                    return updatedItem;
                }   
                return item;
            });
           return updatedInputList;
        });
    };
    
  const getSelectSellerDataApi = async () => {
        try {
            const response = await axios.get("api/sellerlist/sellerDropdownList")
            setsellerData(response.data);
        } catch (error) {
            console.log(error);
        }
    }
    const getSelectStoreDataApi = async (id) => {
        try {
            const response = await axios.post("api/storelist/StoreDropdown", {
                sellerCode: id
            })
            setstoreCodeData(response.data);
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
            setAtrribute(response.data.variantDisplayBean)
        } catch (error) {
            console.log(error);
        }
    }
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
    useEffect(() => {
        getSelectSellerDataApi();
        getSelectAtributeDataApi();
        getSelectAssociationDataApi();
        getSelectStoreDataApi();

    }, [])

    const handleImageChange = (event, i, index) => {
        const file = event.target.files[0].name;
        var newInputList = [...inputList];
        newInputList[index].plpImageNameList[i].selectedImage = file;
        setInputList(newInputList);
    };
    const handleImageChangeedit = (event, i, index) => {
        const file = event.target.files[0].name;
        var d = { ...editedData };
        console.log(d);
        if (d.response.itemBeanList[index].plpImageNameList.length > 0) {
            d.response.itemBeanList[index].plpImageNameList[i].selectedImage = file;
        }
        else { }
        setEditedData(d);
    };

    const handleImageChange1 = (event, i, index) => {
        const file = event.target.files[0].name;
        var newInputList = [...inputList];
        newInputList[index].pdpImageNameList[i].selectedImage = file;
        setInputList(newInputList);
    };

    const handleImageAdd = (index) => {
        var newInputList = [...inputList];
        newInputList[index].plpImageNameList.push({ selectedImage: null });
        setInputList(newInputList);
    };
    const handleImageAddedit = (index) => {
        var d = { ...editedData };
        d.response.itemBeanList[index].plpImageNameList.push({ selectedImage: null });
        setEditedData(d);
    };
    const handleImageAdd1 = (index) => {
        var newInputList = [...inputList];
        newInputList[index].pdpImageNameList.push({ selectedImage: null });
        setInputList(newInputList);
    };

    const handleIsFreeShipping = () => {
        const newIsChecked = !isFreeShipping;
        setisFreeShipping(newIsChecked);
        const updatedInputList = inputList.map((item) => ({
            ...item,
            isFreeShipping: newIsChecked ? "Y" : "N",
        }));

        setInputList(updatedInputList);
    };

    // Assuming you have a state for inputList and a function to update it, let's call it setInputList

    const handleIsFreeShippingEdit = (index) => {
        const updatedEditedData = { ...editedData };
        updatedEditedData.response.itemBeanList[index].isFreeShipping =
            updatedEditedData.response.itemBeanList[index].isFreeShipping === "Y" ? "N" : "Y";
        setEditedData(updatedEditedData);
    };

    const handleIsGiftWrapEdit = (index) => {
        const updatedEditedData = { ...editedData };
        updatedEditedData.response.itemBeanList[index].isGiftWrap =
            updatedEditedData.response.itemBeanList[index].isGiftWrap === "Y" ? "N" : "Y";
        setEditedData(updatedEditedData);
    };
    const handleIsCancellableEdit = (index) => {
        const updatedEditedData = { ...editedData };
        updatedEditedData.response.itemBeanList[index].isCancellable =
            updatedEditedData.response.itemBeanList[index].isCancellable === "Y" ? "N" : "Y";
        setEditedData(updatedEditedData);
    };
    const handleisReturnableEdit = (index) => {
        const updatedEditedData = { ...editedData };
        updatedEditedData.response.itemBeanList[index].isReturnable =
            updatedEditedData.response.itemBeanList[index].isReturnable === "Y" ? "N" : "Y";
        setEditedData(updatedEditedData);
    };
    const handleIsPickAtStoreEdit = (index) => {
        const updatedEditedData = { ...editedData };
        updatedEditedData.response.itemBeanList[index].isPickAtStore =
            updatedEditedData.response.itemBeanList[index].isPickAtStore === "Y" ? "N" : "Y";
        setEditedData(updatedEditedData);
    };
    const handleIsNewArrivalEdit = (index) => {
        const updatedEditedData = { ...editedData };
        updatedEditedData.response.itemBeanList[index].isNewArrival =
            updatedEditedData.response.itemBeanList[index].isNewArrival === "Y" ? "N" : "Y";
        setEditedData(updatedEditedData);
    };

    const handleIsGiftWrap = () => {
        const newIsChecked = !isGiftWrap;
        setisGiftWrap(newIsChecked);

        const updatedInputList = inputList.map((item) => ({
            ...item,
            isGiftWrap: newIsChecked ? "Y" : "N",
        }));

        setInputList(updatedInputList);
    };

    const handleIsCancellable = () => {
        const newIsChecked = !isCancellable;
        setisCancellable(newIsChecked);
        const updatedInputList = inputList.map((item) => ({
            ...item,
            isCancellable: newIsChecked ? "Y" : "N",
        }));

        setInputList(updatedInputList);
    };

    const handleIsReturnable = () => {
        const newIsChecked = !isReturnable;
        setisReturnable(newIsChecked);

        const updatedInputList = inputList.map((item) => ({
            ...item,
            isReturnable: newIsChecked ? "Y" : "N",
        }));

        setInputList(updatedInputList);
    };
    const handleIsPickAtStore = () => {
        const newIsChecked = !ispickAtStore;
        setIsPickAtStore(newIsChecked);

        const updatedInputList = inputList.map((item) => ({
            ...item,
            ispickAtStore: newIsChecked ? "Y" : "N",
        }));

        setInputList(updatedInputList);
    };
    const handleIsNewArrival = () => {
        const newIsChecked = !isNewArrival;
        setIsNewArrival(newIsChecked);

        const updatedInputList = inputList.map((item) => ({
            ...item,
            isNewArrival: newIsChecked ? "Y" : "N",
        }));

        setInputList(updatedInputList);
    };

    const handleData = () => {
        setItemListRedux(JSON.stringify(inputList))
        window.sessionStorage.setItem("editDataComponent2", JSON.stringify(editedData));
        handleNext();
    }

    return (
        <>
            {action === "edit" ?
                <>
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
                                                <div className="w-100 d-flex flex-md-row flex-column">
                                                    <Link type="button" disabled className="w-100 text-center py-3 btn-nav position-relative text-white fw-bold active">Basic Info
                                                    </Link>
                                                    <Link type="button" disabled className="w-100 text-center py-3 btn-nav position-relative text-white fw-bold active">Variants
                                                    </Link>
                                                    <Link type="button" disabled className="w-100 text-center py-3 btn-nav position-relative text-white fw-bold ">More Attributes
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className=''>
                                            <Form encType="multipart/form-data" className="px-3" >

                                                <>
                                                    <div className="row">
                                                        <div className="col-md-4 mt-3">
                                                            <FormGroup type="text" label="Product Schema" placeholder=""
                                                            value={editedData.response.schemaCode} tooltipMessage={cs.schemaCode}
                                                                disabled /></div>
                                                    </div>
                                                </>

                                                {editedData.response.itemBeanList.map((s, i) => (
                                                    <div className='row'>
                                                        <div className="col-md-4 mt-3">
                                                            <FormGroup type="text" required="required" label="Item Name" placeholder="" value={s.itemName} tooltipMessage={cs.itemName}
                                                                onChange={(event) => handleInputItemNameedit(event, i)} />
                                                        </div>

                                                        <div className="col-md-4 mt-3">
                                                            <FormGroup type="text" required="required" label="Article Description" placeholder="" value={s.articleDesc} tooltipMessage={cs.articleDesc}
                                                                onChange={(event) => handleInputArticleDescEdit(event, i)} />
                                                        </div>
                                                        <div className="col-md-4 mt-3">
                                                            <FormGroup type="text" required="required" label="Article Code" placeholder="" value={s.articleCodeTex} tooltipMessage={cs.articleCodeTex}
                                                                onChange={(event) => handleInputArticleCodeEdit(event, i)} />
                                                        </div>
                                                        <div className="col-md-4 mt-3">
                                                            <FormGroup type="text" required="required" label="Item Sku" placeholder="" value={s.itemSku} tooltipMessage={cs.itemSku}
                                                                onChange={(event) => handleInputItemSkuEdit(event, i)} />
                                                        </div>
                                                        <div className="col-md-4 mt-3">
                                                            <SelectComponent
                                                                placeholder="Seller"
                                                                onChange={(event) => handleInputSellerEdit(event, i)}
                                                                dropdownlist={sellerData}
                                                                value={s.vendorCode} tooltipMessage={cs.vendorCode}
                                                            />
                                                        </div>
                                                        <div className="col-md-4 mt-3">
                                                            <SelectComponent
                                                                placeholder="Store Code"
                                                                onChange={(event) => handleInputStoreEdit(event, i)}
                                                                dropdownlist={storeCodeData}
                                                                value={s.storeCode} tooltipMessage={cs.storeCode}
                                                            />
                                                        </div>
                                                    </div>))}
                                                {editedData.response.itemBeanList.map((s, i) => (
                                                    <>
                                                        <div className='row'>
                                                            <div className="col-md-2 mt-3">
                                                                <FormGroupRadio
                                                                    type="text"
                                                                    title="Is FreeShipping"
                                                                    checked={s.isFreeShipping === "Y"} tooltipMessage={cs.isFreeShipping}
                                                                    value={s.isFreeShipping === "Y"}
                                                                    onChange={() => {
                                                                        handleIsFreeShippingEdit(i);
                                                                    }}
                                                                />
                                                            </div>
                                                            <div className="col-md-2 mt-3">
                                                                <FormGroupRadio
                                                                    type="text"
                                                                    title="Is Gift Wrap"
                                                                    checked={s.isGiftWrap === "Y"} tooltipMessage={cs.isGiftWrap}
                                                                    value={s.isGiftWrap === "Y"}
                                                                    onChange={() => {
                                                                        handleIsGiftWrapEdit(i);
                                                                    }}
                                                                />
                                                            </div>
                                                            <div className="col-md-2 mt-3">
                                                                <FormGroupRadio
                                                                    type="text"
                                                                    title="Is Cancellable"
                                                                    checked={s.isCancellable === "Y"} tooltipMessage={cs.isCancellable}
                                                                    value={s.isCancellable === "Y"}
                                                                    onChange={() => {
                                                                        handleIsCancellableEdit(i);
                                                                    }}
                                                                />
                                                            </div>
                                                            <div className="col-md-2 mt-3">
                                                                <FormGroupRadio
                                                                    type="text"
                                                                    title="Is Returnable"
                                                                    checked={s.isReturnable ===  "Y"}tooltipMessage={cs.isReturnable}
                                                                    value={s.isReturnable === "Y"}
                                                                    onChange={() => {
                                                                        handleisReturnableEdit(i);
                                                                    }}
                                                                />
                                                            </div>
                                                            <div className="col-md-2 mt-3">
                                                                <FormGroupRadio
                                                                    type="text"
                                                                    title="Is Pick At Store"
                                                                    checked={s.isPickAtStore === "Y"} tooltipMessage={cs.isPickAtStore}
                                                                    value={s.isPickAtStore === "Y"}
                                                                    onChange={() => {
                                                                        handleIsPickAtStoreEdit(i);
                                                                    }}
                                                                />
                                                            </div>
                                                            <div className="col-md-2 mt-3">
                                                                <FormGroupRadio
                                                                    type="text"
                                                                    title="Is New Arrival"
                                                                    checked={s.isNewArrival === "Y"} tooltipMessage={cs.isNewArrival}
                                                                    value={s.isNewArrival === "Y"}
                                                                    onChange={() => {
                                                                        handleIsNewArrivalEdit(i);
                                                                    }}
                                                                />
                                                            </div>
                                                        </div>

                                                        <div className='row'>
                                                            {s.plpImageNameList && s.plpImageNameList.length > 0 ? (
                                                                s.plpImageNameList.map((input, index) => (
                                                                    <div className="col-md-4 mt-3" key={i}>
                                                                        <LogoIcons tooltipMessage={cs.plpImageNameList}
                                                                            type='file'
                                                                            onChange={(event) => handleImageChange(event, index, i)}
                                                                        />
                                                                    </div>
                                                                ))
                                                            ) : (
                                                                <div className="col-md-4 mt-3">
                                                                    <LogoIcons tooltipMessage={cs.plpImageNameList}
                                                                        type='file'
                                                                        onChange={(event) => handleImageChangeedit(event, 0, i)}
                                                                    />
                                                                </div>
                                                            )}
                                                            {/* whenever server starts remove else part */}
                                                        </div>
                                                        <div className="col-md-4 mt-3">
                                                            <a className="btn btn-md m-1 px-5 py-1 rounded-3" style={{ background: "#349f01", color: "white", fontWeight: "bold" }}
                                                                onClick={() => handleImageAddedit(i)}
                                                            >Add Image</a>
                                                        </div>
                                                        <div className='row'>
                                                            {s.pdpImageNameList && s.pdpImageNameList.length > 0 ? (
                                                                s.pdpImageNameList.map((input, i) => (
                                                                    <div className="col-md-4 mt-3" key={i}>
                                                                        <LogoIcons tooltipMessage={cs.plpImageNameList}
                                                                            onChange={(event) => handleImageChange1(event, i, i)}
                                                                        />
                                                                    </div>
                                                                ))
                                                            ) : (
                                                                <div className="col-md-4 mt-3">
                                                                    <LogoIcons tooltipMessage={cs.plpImageNameList}
                                                                        onChange={(event) => handleImageChange1(event, 0, 0)}
                                                                    />
                                                                </div>
                                                            )}
                                                        </div>
                                                        <div className="col-md-4 mt-3">
                                                            <a className="btn btn-md m-1 px-5 py-1 rounded-3" style={{ background: "#349f01", color: "white", fontWeight: "bold" }}
                                                                onClick={() => handleImageAdd1(i)}
                                                            >Add Image</a>
                                                        </div>
                                                    </>))}
                                                {editedData.response.itemBeanList.map((s, i) => (
                                                    <div className='row'>
                                                        <div className="details mb-5 mt-5">
                                                            <div className="contact">
                                                                <form className="form-floating">
                                                                    <div className="box">
                                                                        <h4>Variant Attribute</h4>
                                                                        <div className="table-responsive p-3">
                                                                            <table className="table table-bordered border-top table-hover table-responsive">
                                                                                <tbody>
                                                                                    {s.keyVariantList.map((m, k) => (
                                                                                        <tr key={k}>
                                                                                            <th>{m.kcaName}</th>
                                                                                            <td>
                                                                                                {m.isLov === 'Y' ? (
                                                                                                    <SelectComponent
                                                                                                        placeholder="Select Option"
                                                                                                        onChange={(selectedValue) => handleInputAtrributeEdit(selectedValue, m.kcaRfnum)}
                                                                                                        dropdownlist={m.lovList}
                                                                                                        value={m.lovListoptionLabel}
                                                                                                    />
                                                                                                    
                                                                                                ) : (
                                                                                                    <input
                                                                                                        type="text"
                                                                                                        className="form-control input-shadow vari_iD_0"
                                                                                                        value={m.kcaValue} tooltipMessage={cs.kcaValue}
                                                                                                        onChange={(event) => handleInputAtrributeEdit(event, m.kcaRfnum)}
                                                                                                    />
                                                                                                )}
                                                                                            </td>
                                                                                        </tr>
                                                                                    ))}
                                                                                </tbody>
                                                                            </table>
                                                                        </div>
                                                                    </div>
                                                                </form>
                                                            </div>
                                                        </div>
                                                    </div>))}
                                            </Form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>



                </>
                :
                <>
                    {inputList.map((input, index) => (
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
                                                    <div className="w-100 d-flex flex-md-row flex-column">
                                                        <Link type="button" disabled className="w-100 text-center py-3 btn-nav position-relative text-white fw-bold active">Basic Info
                                                        </Link>
                                                        <Link type="button" disabled className="w-100 text-center py-3 btn-nav position-relative text-white fw-bold ">Variants
                                                        </Link>
                                                        <Link type="button" disabled className="w-100 text-center py-3 btn-nav position-relative text-white fw-bold ">More Attributes
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className=''>
                                                <Form encType="multipart/form-data" className="px-3" >
                                                    <div className="row">
                                                        <div className="col-md-4 mt-3">
                                                            <FormGroup type="text" label="Product Schema" placeholder=""
                                                                value={productSchema.keywordName} tooltipMessage={cs.keywordName}
                                                                disabled />
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className='row'>
                                                            <div className="col-md-4 mt-3">
                                                                <FormGroup type="text" required="required" label="Item Name" placeholder="" value={inputList.itemName} tooltipMessage={cs.itemName}
                                                                    onChange={(event) => handleInputItemName(event, index)} />
                                                            </div>

                                                            <div className="col-md-4 mt-3">
                                                                <FormGroup type="text" required="required" label="Article Description" placeholder="" value={inputList.articleDesc} tooltipMessage={cs.articleDesc}
                                                                    onChange={(event) => handleInputArticleDesc(event, index)} />
                                                            </div>
                                                            <div className="col-md-4 mt-3">
                                                                <FormGroup type="text" required="required" label="Article Code" placeholder="" value={inputList.articleCode} tooltipMessage={cs.articleCode}
                                                                    onChange={(event) => handleInputArticleCode(event, index)} />
                                                            </div>
                                                            <div className="col-md-4 mt-3">
                                                                <FormGroup type="text" required="required" label="Item Sku" placeholder="" value={inputList.itemSku} tooltipMessage={cs.itemSku}
                                                                    onChange={(event) => handleInputItemSku(event, index)} />
                                                            </div>
                                                            <div className="col-md-4 mt-3"><SelectComponent label="Seller"
                                                                onChange={(event) => handleInputSeller(event, index)} dropdownlist={sellerData} tooltipMessage={cs.sellerData}
                                                            />
                                                            </div>
                                                            <div className="col-md-4 mt-3"><SelectComponent label="Store Code"
                                                                onChange={(event) => handleInputStore(event, index)} dropdownlist={storeCodeData} tooltipMessage={cs.storeCodeData} />
                                                            </div>
                                                        </div>
                                                        <div className='row'>

                                                            <div className='col-md-2 mt-3'>
                                                                <FormGroupRadio type="text" title="Is FreeShipping" checked={isFreeShipping} tooltipMessage={cs.isFreeShipping} onChange={() => { handleIsFreeShipping() }} />
                                                            </div>
                                                            <div className='col-md-2 mt-3'>
                                                                <FormGroupRadio type="text" title="Is Gift Wrap" checked={isGiftWrap} tooltipMessage={cs.isGiftWrap} onChange={() => { handleIsGiftWrap() }} />
                                                            </div>
                                                            <div className='col-md-2 mt-3'>
                                                                <FormGroupRadio type="text" title="Cancellable" checked={isCancellable} tooltipMessage={cs.isCancellable} onChange={() => { handleIsCancellable() }} />
                                                            </div>
                                                            <div className='col-md-2 mt-3'>
                                                                <FormGroupRadio type="text" title="Is Returnable" checked={isReturnable} tooltipMessage={cs.isReturnable} onChange={() => { handleIsReturnable() }} />
                                                            </div>
                                                            <div className='col-md-2 mt-3'>
                                                                <FormGroupRadio type="text" title="Is Pick At Store" checked={ispickAtStore} tooltipMessage={cs.ispickAtStore} onChange={() => { handleIsPickAtStore() }} />
                                                            </div>
                                                            <div className='col-md-2 mt-3'>
                                                                <FormGroupRadio type="text" title="Is New Arrival" checked={isNewArrival} tooltipMessage={cs.isNewArrival} onChange={() => { handleIsNewArrival() }} />
                                                            </div>
                                                        </div>
                                                        <div className='row'>
                                                            <div className="details mb-5 mt-5">
                                                                <div className="contact">
                                                                    <form className="form-floating">
                                                                        <div className="box">
                                                                            <h4>Variant Attribute</h4>
                                                                            <div className="table-responsive p-3">
                                                                                <table className="table table-bordered border-top table-hover table-responsive">
                                                                                    <tbody>
                                                                                        {attribute.map((s, i) => (
                                                                                            <tr key={i}>
                                                                                                <th>{s.kcaName}</th>

                                                                                                <td>
                                                                                                    {s.isLov === 'Y' ? (
                                                                                                        <SelectComponent
                                                                                                            placeholder="Select Option"
                                                                                                            onChange={(event) => handleInputAtrribute(event, s.kcaRfnum)}
                                                                                                            dropdownlist={s.lovList}
                                                                                                            value={s.lovListoptionLabel} tooltipMessage={cs.lovListoptionLabel}
                                                                                                        />
                                                                                                    ) : (
                                                                                                        <input
                                                                                                            type="text"
                                                                                                            className="form-control input-shadow vari_iD_0"
                                                                                                            onChange={(event) => handleInputAtrribute(event, s.kcaRfnum)} tooltipMessage={cs.kcaRfnum}
                                                                                                        />
                                                                                                    )}
                                                                                                </td>
                                                                                            </tr>
                                                                                        ))}
                                                                                    </tbody>

                                                                                </table>
                                                                            </div>
                                                                        </div>
                                                                    </form>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className='row'>
                                                            {input.plpImageNameList.map((input, i) => (
                                                                <div className="col-md-4 mt-3">
                                                                    <LogoIcons tooltipMessage={cs.plpImageNameList} type='file'
                                                                        onChange={(event) => handleImageChange(event, i, index)} />
                                                                </div>
                                                            ))}
                                                        </div>
                                                        <div className="col-md-4 mt-3">
                                                            <a className="btn btn-md m-1 px-5 py-1 rounded-3" style={{ background: "#349f01", color: "white", fontWeight: "bold" }}
                                                                onClick={() => handleImageAdd(index)}
                                                            >Add Image</a>
                                                        </div>
                                                        <div className='row'>
                                                            {input.pdpImageNameList.map((input, i) => (
                                                                <div className="col-md-4 mt-3">
                                                                    <LogoIcons tooltipMessage={cs.plpImageNameList}
                                                                        onChange={(event) => handleImageChange1(event, i, index)} />
                                                                </div>
                                                            ))}
                                                        </div>
                                                        <div className="col-md-4 mt-3">
                                                            <a className="btn btn-md m-1 px-5 py-1 rounded-3" style={{ background: "#349f01", color: "white", fontWeight: "bold" }}
                                                                onClick={() => handleImageAdd1(index)}
                                                            >Add Image</a>
                                                        </div>
                                                    </div>
                                                </Form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    ))}
                </>
            }

            <div className='row'>
                <div className='col-lg-12'>
                    <div className="text-end p-2" style={{ borderColor: "#2196f3" }}>
                        <div className="mx-5 my-2 text-end">
                            <a className="btn btn-sm m-1 px-5 py-1 rounded-3" style={{ background: "#349f01", color: "white", fontWeight: "bold" }}
                                onClick={handleListAdd}
                            >Add New</a>
                            <a className="btn btn-md m-1 px-5 py-1 rounded-3" style={{ background: "#349f01", color: "white", fontWeight: "bold" }} onClick={handleBack}>Back</a>
                            <a className="btn btn-md m-1 px-5 py-1 rounded-3 me-0" style={{ background: "#349f01", color: "white", fontWeight: "bold" }} onClick={handleData}>Next</a>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ComponentScreen2