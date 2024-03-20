import React, { useEffect } from 'react';
import { useState } from 'react';
import { Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import FormGroup from '../../../../../forms/FormGroup';
import FormGroupRadio from '../../../../../forms/FormGroupRadio';
import axios from "../../../../../util/HttpServices";
import "../../../../../css/Style.css";
import { ButtonLabels } from '../../../../constants/LabelConstants';
<<<<<<< HEAD
import { TooltipMessages } from '../../../../constants/TooltipConstants';
=======
import SelectComponent from '../../../../../forms/SelectComponent';
>>>>>>> 20203647b4132e40bff9328a7241f7d2c053ecf1

const CreateEditNotifier = () => {

    const cen = TooltipMessages.global.communication.notifierdefination.CreateEditNotifier;
    const action = window.localStorage.getItem("action");
    const editData = window.sessionStorage.getItem("editData")
    const editedData = JSON.parse(editData);
    const [notificationTypeData, setnotificationTypeData] = useState([]);
    const [notificationTypeSelect, setnotificationTypeSelect] = useState();
    const [notificationChannelData, setnotificationChannelData] = useState([]);
    const [notificationChannelSelect, setnotificationChannelSelect] = useState();
    const [mobileTemplateData, setmobileTemplateData] = useState([]);
    const [mobileTemplateSelect, setmobileTemplateSelect] = useState();
    const [mailDefinitionNumber, setmailDefinitionNumber] = useState("")
    const [name, setName] = useState("")
    const [subject, setSubject] = useState("")
    const [from, setFrom] = useState("")
    const [to, setTo] = useState("")
    const [cc, setCC] = useState("")
    const [bcc, setBCC] = useState("")
    const [parameter2, setParameter2] = useState("")
    const [parameter3, setParameter3] = useState("")
    const [parameter4, setParameter4] = useState("")
    const [templateId, setTemplateId] = useState("")
    const [isactive, setIsActive] = useState(false);
    const [islog, setIsLog] = useState(false);
    const isAlphabetsAndSpaces = (value) => /^[A-Za-z\s]+$/.test(value);


    const onSubmit = async (id) => {
        // if (!stateCode) {
        //   toast.error('State Code is required.');
        //   return;
        // }
        var url = "/api/mailerDefinitionMaster/save";
        var req = {
            notifyType:notificationTypeSelect,
            name:name,
            subject:subject,
            from:from,
            to:to,
            bcc:bcc,
            cc:cc,
            templateCode:mobileTemplateSelect,
            channelType:notificationChannelSelect,
            log:islog === true ? "Y" : "N",
            templateId:templateId,
            parameter2:parameter2,
            parameter3:parameter3,
            parameter4:parameter4,
            isActive: isactive === true ? "Y" : "N",
        };

        if (action === "edit") {
            req.id = id;
            url = ` /api/mailerDefinitionMaster/${id}`;
        }

        if (url === ` /api/mailerDefinitionMaster/${id}`) {
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


    const getSelectNotificationTypeApi = async () => {
        try {
          const response = await axios.get("api/commonlist/groupcode/NOTIFICATION_TYPE")
          setnotificationTypeData(response.data);
        } catch (error) {
          console.log(error);
        }
      }
      const getSelectNotificationChannelApi = async () => {
        try {
          const response = await axios.get("api/commonlist/groupcode/INTEGRATION_PROTOCOL")
          setnotificationChannelData(response.data);
        } catch (error) {
          console.log(error);
        }
      }

      useEffect(() => {getSelectNotificationTypeApi(); getSelectNotificationChannelApi() }, [])


    return (
        <>
            <div className="buttons d-flex justify-content-end p-1 mt-3">
                <Link className="btns pe-5" to={"/communication/searchNotifier"} style={{ textDecoration: "none" }}>
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
                                    <div className="col-md-4 mt-3"><FormGroup type="text" label="Mail Definition Number" placeholder="" tooltipMessage={cen.mailDefinitionNumber} value={mailDefinitionNumber} onChange={(e) => setmailDefinitionNumber(e.target.value)} disabled={true}/></div>
                                    <div className="col-md-4 mt-3"><FormGroup type="text" label="Name" placeholder="" tooltipMessage={cen.name} value={name} onChange={(e) => setName(e.target.value)} /></div>
                                    <div className="col-md-4 mt-3"><FormGroup type="text" label="Subject" placeholder="" tooltipMessage={cen.subject} value={subject} onChange={(e) => setSubject(e.target.value)} /></div>
                                    <div className="col-md-4 mt-3"><FormGroup type="text" label="From" placeholder="" tooltipMessage={cen.from} value={from} onChange={(e) => setFrom(e.target.value)} /></div>
                                    <div className="col-md-4 mt-3"><FormGroup type="text" label="To" placeholder="" tooltipMessage={cen.to} value={to} onChange={(e) => setTo(e.target.value)} /></div>
                                    <div className="col-md-4 mt-3"><FormGroup type="text" label="CC" placeholder="" tooltipMessage={cen.cc} value={cc} onChange={(e) => setCC(e.target.value)} /></div>
                                    <div className="col-md-4 mt-3"><FormGroup type="text" label="BCC" placeholder="" tooltipMessage={cen.bcc} value={bcc} onChange={(e) => setBCC(e.target.value)} /></div>
                                    <div className="col-md-4 mt-3"><FormGroupRadio title={ButtonLabels.Active_Status} tooltipMessage={cen.isactive} value={isactive} onChange={() => setIsActive(!isactive)} /></div>
=======
                                    <div className="col-md-4 mt-3"><FormGroup type="text" label="Mail Definition Number" placeholder="" value={mailDefinitionNumber} onChange={(e) => setmailDefinitionNumber(e.target.value)} disabled={true}/></div>
                                    <div className="col-md-4 mt-3"><SelectComponent placeholder="Notification Type" selectedOption={notificationTypeSelect} onChange={(e) => setnotificationTypeSelect(e.target.value)} dropdownlist={notificationTypeData} /></div>
                                    <div className="col-md-4 mt-3"><FormGroup type="text" label="Name" placeholder="" value={name} onChange={(e) => setName(e.target.value)} /></div>
                                    <div className="col-md-4 mt-3"><FormGroup type="text" label="Subject" placeholder="" value={subject} onChange={(e) => setSubject(e.target.value)} /></div>
                                    <div className="col-md-4 mt-3"><FormGroup type="text" label="From" placeholder="" value={from} onChange={(e) => setFrom(e.target.value)} /></div>
                                    <div className="col-md-4 mt-3"><FormGroup type="text" label="To" placeholder="" value={to} onChange={(e) => setTo(e.target.value)} /></div>
                                    <div className="col-md-4 mt-3"><FormGroup type="text" label="CC" placeholder="" value={cc} onChange={(e) => setCC(e.target.value)} /></div>
                                    <div className="col-md-4 mt-3"><FormGroup type="text" label="BCC" placeholder="" value={bcc} onChange={(e) => setBCC(e.target.value)} /></div>
                                    <div className="col-md-4 mt-3"><SelectComponent placeholder="Mobile Template" selectedOption={mobileTemplateSelect} onChange={(e) => setmobileTemplateSelect(e.target.value)} dropdownlist={mobileTemplateData} /></div>
                                    <div className="col-md-4 mt-3"><SelectComponent placeholder="Notification Channel" selectedOption={notificationChannelSelect} onChange={(e) => setnotificationChannelSelect(e.target.value)} dropdownlist={notificationChannelData} /></div>
                                    <div className="col-md-4 mt-3"><FormGroupRadio title={ButtonLabels.Active_Status} value={isactive} onChange={() => setIsActive(!isactive)} /></div>
                                    <div className="col-md-4 mt-3"><FormGroupRadio title={ButtonLabels.Log_Status} value={islog} onChange={() => setIsLog(!islog)} /></div>
                                    <div className="col-md-4 mt-3"><FormGroup type="text" label="Template Id" placeholder="" value={templateId} onChange={(e) => setTemplateId(e.target.value)} /></div>
                                    <div className="col-md-4 mt-3"><FormGroup type="text" label="Parameter 2" placeholder="" value={parameter2} onChange={(e) => setParameter2(e.target.value)} /></div>
                                    <div className="col-md-4 mt-3"><FormGroup type="text" label="Parameter 3" placeholder="" value={parameter3} onChange={(e) => setParameter3(e.target.value)} /></div>
                                    <div className="col-md-4 mt-3"><FormGroup type="text" label="Parameter 4" placeholder="" value={parameter4} onChange={(e) => setParameter4(e.target.value)} /></div>
>>>>>>> 20203647b4132e40bff9328a7241f7d2c053ecf1
                                </div>
                            </Form>
                        </div>
                    </form>
                    <div className="buttons d-flex justify-content-end p-1">
                        <div className="btns">
                            <button className="submit-btn btn-sm m-2 px-5 py-1 text-white rounded-3 me-2" onClick={() => onSubmit(editedData.glbMailerRfNum)}>Save</button>
                        </div>
                    </div>
                </div>
                <ToastContainer />
            </div>

        </>
    )
}

export default CreateEditNotifier;