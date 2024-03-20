import React, { useEffect } from 'react';
import { useState } from 'react';
import { Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import FormGroup from '../../../../../forms/FormGroup';
import FormGroupRadio from '../../../../../forms/FormGroupRadio';
import axios from "../../../../../util/HttpServices";
import ReactQuill from 'react-quill';
import "../../../../../css/Style.css";
import 'react-quill/dist/quill.snow.css';
import { ButtonLabels } from '../../../../constants/LabelConstants';
import { TooltipMessages } from '../../../../constants/TooltipConstants';

const CreateEditTemplateDefinitionMaster = () => {
    const cetdm = TooltipMessages.global.communication.templateDefinitionMaster.CreateEditTemplateDefinitionMaster;
    const action = window.localStorage.getItem("action");
    const editData = window.sessionStorage.getItem("editData")
    const editedData = JSON.parse(editData);
    const [templateDefinitionMaster, setTemplateDefinitionMaster] = useState("")
    const [name, setName] = useState("")
    const [templateFile, setTemplateFile] = useState("")
    const [templateCode, setTemplateCode] = useState("")
    const [fieldName, setfieldName] = useState("")
    const [value, setvalue] = useState("");
    const [isactive, setIsActive] = useState(true);
    const isAlphabetsAndSpaces = (value) => /^[A-Za-z\s]+$/.test(value);
    const [fieldRows, setFieldRows] = useState([]);
    const [text, setText] = useState('');
    const handleChange = (value) => {
        setText(value);
    };
    const handleAddMoreField = () => {
        // Add a new field row to the array
        setFieldRows([...fieldRows, { fieldName, value }]);
        // Clear the input values for the next row
        setfieldName('');
        setvalue('');
      };
    const onSubmit = async (id) => {
        // if (!stateCode) {
        //   toast.error('State Code is required.');
        //   return;
        // }
        var url = "/api/template-master/save";
        var req = {
            templatecode: templateCode,
            name: name,
            templatefile: templateFile,
            fields: fieldRows.map((row) => ({ fieldName: row.fieldName, fieldValue: row.value })),
            // templatetype:templatetype,
            // themeCode:themeCode,
            templateContent:text,
            isActive: isactive === true ? "Y" : "N",
        };

        if (action === "edit") {
            req.id = id;
            url = `api/template-master/${id}`;
        }

        if (url === `api/template-master/${id}`) {
            const editRes = await axios.put(url, req).then((response) => {
                if (response.status === 200 || response.status === 201) {
                    // Display a success toast
                    toast.success('Notifier Definition saved successfully.');
                    // reset();
                } else {
                    // Handle other status codes if needed
                    toast.error('Failed to save Notifier Definition');
                }
            });
        } else if (action === "create") {
            const createRes = await axios.post(url, req).then((response) => {
                if (response.status === 200 || response.status === 201) {
                    // Display a success toast
                    toast.success('Notifier Definition saved successfully.');
                    // reset();
                } else {
                    // Handle other status codes if needed
                    toast.error('Failed to save Notifier Definition');
                }
            });
        }
    };



    useEffect(() => {
        if (action === "edit") {
            setTemplateDefinitionMaster(editedData.otGlbTemplatemasterRfnum);
            setName(editedData.name);
            setTemplateFile(editedData.templatefile);
            setTemplateCode(editData.templatecode);
            setfieldName(editedData.fields.fieldName)
            setfieldName(editedData.fields.fieldValue)
            setText(editedData.templateContent)
            setIsActive(editedData.isActive === "Y" ? true : false);
        } else {
            setTemplateDefinitionMaster("");
            setName("");
            setTemplateFile("");
            setTemplateCode("");
            setIsActive("");
        }
    }, []);


    return (
        <>
            <div className="buttons d-flex justify-content-end p-1 mt-3">
                <Link className="btns pe-5" to={"/communication/searchTemplateDefinition"} style={{ textDecoration: "none" }}>
                    <button className="submit-btn btn-sm m-2 px-5 py-1 text-white rounded-3 me-2">Cancle</button>
                </Link>
            </div>

            <div className="details  mx-5 mt-3 mb-5">
                <div className="contact">
                    <form className="form-floating">
                        <div className="box">
                            <Form encType="multipart/form-data" className="px-3" >
                                <div className="row">
<<<<<<< HEAD
                                    <div className="col-md-4 mt-3"><FormGroup type="text" label="Template Definition Master" placeholder="" tooltipMessage={cetdm.templateDefinitionMaster} value={templateDefinitionMaster} onChange={(e) => setTemplateDefinitionMaster(e.target.value)} /></div>
                                    <div className="col-md-4 mt-3"><FormGroup type="text" label="Name" placeholder="" tooltipMessage={cetdm.name} value={name} onChange={(e) => setName(e.target.value)} /></div>
                                    <div className="col-md-4 mt-3"><FormGroup type="text" label="Template File" placeholder="" tooltipMessage={cetdm.templateFile} value={templateFile} onChange={(e) => setTemplateFile(e.target.value)} /></div>
                                    <div className="col-md-4 mt-3"><FormGroup type="text" label="Template Code" placeholder="" tooltipMessage={cetdm.templateCode} value={templateCode} onChange={(e) => setTemplateCode(e.target.value)} /></div>
                                    <div className="col-md-4 mt-3"><FormGroupRadio title={ButtonLabels.Active_Status} tooltipMessage={cetdm.isactive} value={isactive} onChange={() => setIsActive(!isactive)} /></div>
=======
                                    <div className={`col-md-4 mt-3 ${action === 'edit' ? '' : 'd-none'}`}><FormGroup type="text" label="Template Definition Master" placeholder="" value={templateDefinitionMaster} onChange={(e) => setTemplateDefinitionMaster(e.target.value)} disabled={action === 'edit'}/></div>
                                    <div className="col-md-4 mt-3"><FormGroup type="text" label="Name" placeholder="" value={name} onChange={(e) => setName(e.target.value)} /></div>
                                    <div className="col-md-4 mt-3"><FormGroup type="text" label="Template File" placeholder="" value={templateFile} onChange={(e) => setTemplateFile(e.target.value)} /></div>
                                    <div className="col-md-4 mt-3"><FormGroup type="text" label="Template Code" placeholder="" value={templateCode} onChange={(e) => setTemplateCode(e.target.value)} /></div>
                                    <div className="col-md-4 mt-3"><FormGroupRadio title={ButtonLabels.Active_Status} value={isactive} onChange={() => setIsActive(!isactive)} checked ={isactive}/></div>
                                </div>
                                <div>
                                    <div className="buttons d-flex justify-content-end p-1">
                                        <div className="btns">
                                            <button
                                                type="button"
                                                className="submit-btn btn-sm m-2 px-5 py-1 text-white rounded-3 me-2"
                                                onClick={handleAddMoreField}
                                            >
                                                Add More Field
                                            </button>
                                        </div>
                                    </div>

                                    {fieldRows.map((row, index) => (
                                        <div key={index} className="row">
                                            <div className="col-md-4 mt-3">
                                                <FormGroup
                                                    type="text"
                                                    label="Field Name"
                                                    placeholder=""
                                                    value={row.fieldName}
                                                    onChange={(e) => {
                                                        const updatedFieldRows = [...fieldRows];
                                                        updatedFieldRows[index].fieldName = e.target.value;
                                                        setFieldRows(updatedFieldRows);
                                                    }}
                                                />
                                            </div>
                                            <div className="col-md-4 mt-3">
                                                <FormGroup
                                                    type="text"
                                                    label="Value"
                                                    placeholder=""
                                                    value={row.value}
                                                    onChange={(e) => {
                                                        const updatedFieldRows = [...fieldRows];
                                                        updatedFieldRows[index].value = e.target.value;
                                                        setFieldRows(updatedFieldRows);
                                                    }}
                                                />
                                            </div>
                                        </div>
                                    ))}
>>>>>>> 20203647b4132e40bff9328a7241f7d2c053ecf1
                                </div>
                            </Form>
                        </div>
                    </form>
                    <div className='row mt-3'>
                    <div className='col-lg-12'>
                        <ReactQuill
                            value={text}
                            onChange={handleChange}
                            theme="snow" // You can change the theme if needed
                            modules={{
                                toolbar: [
                                    [{ header: [1, 2, false] }],
                                    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
                                    [{ list: 'ordered' }, { list: 'bullet' }],
                                    ['link', 'image'],
                                    ['clean'],
                                ],
                            }}
                        />

                    </div>
                    </div>
                    <div className="buttons d-flex justify-content-end p-1">
                        <div className="btns">
                            <button className="submit-btn btn-sm m-2 px-5 py-1 text-white rounded-3 me-2" onClick={() => onSubmit(editedData.otGlbTemplatemasterRfnum)}>Save</button>
                        </div>
                    </div>
                </div>
                <ToastContainer />
            </div>

        </>
    )
}

export default CreateEditTemplateDefinitionMaster;