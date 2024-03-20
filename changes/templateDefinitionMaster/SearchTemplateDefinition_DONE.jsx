import { Edit } from '@mui/icons-material';
import { TablePagination, Box, Tooltip } from '@mui/material';
import { MaterialReactTable } from 'material-react-table';
import React, { useEffect, useState } from 'react';
import { useMemo } from 'react';
import { Form } from 'react-bootstrap';
import { IoIosInformationCircle } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';
import FormGroup from '../../../../../forms/FormGroup';
import SelectComponent from '../../../../../forms/SelectComponent';
import axios from "../../../../../util/HttpServices";
import "../../../../../css/Style.css";
import FormGroupRadio from '../../../../../forms/FormGroupRadio';
import { ButtonLabels } from '../../../../constants/LabelConstants';
import { TooltipMessages } from '../../../../constants/TooltipConstants';
import IoIosInformationCircleCustom from '../../../../../forms/IoIosInformationCircleCustom';

const SearchTemplateDefinition = () => {

  const std = TooltipMessages.global.communication.templateDefinitionMaster.SearchTemplateDefinition;
  const [searchData, setSearchData] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [editData, setEditData] = useState({});
  const [action, setAction] = useState("");
  const navigate = useNavigate();
  const [name, setName] = useState();
  const [isactive, setIsActive] = useState(true);
  const [templateFile, setTemplateFile] = useState()
  const [templateCode, setTemplateCode] = useState()
  const [templatetype, setTemplatetype] = useState()
  const [themeCode, setThemeCode] = useState()
  const [notificationTypeData, setnotificationTypeData] = useState([]);
  const [notificationTypeSelect, setnotificationTypeSelect] = useState();
  const [totalCount, setTotalCount] = useState(0);
  window.localStorage.setItem('action', action);

  window.sessionStorage.setItem('editData', JSON.stringify(editData))

  const columns = useMemo(() => [
    {
      accessorKey: 'name', header: 'Details', size: 150, Cell: ({ row }) => (<span style={{ fontWeight: "bold", color: "#2b2c2c", cursor: "pointer" }}>Name:{row.original.name}
        <br />Template Code:{row.original.templatecode} <br />Template File:{row.original.templatefile}</span>)
    },], []);
  const handleClickCreate = () => {
    setAction("create")
    const timer = setTimeout(() => {
      navigate("/communication/templateDefinition")

    }, 1000);
  }

  const handleClickEdit = () => {
    setAction("edit");
    const timer = setTimeout(() => {
      navigate("/communication/templateDefinition")
    }, 1000);
  }


  const getEditApi = async (id) => {
    try {
      const response = await axios.get(`api/template-master/${id}`);
      setEditData(response.data)
    } catch (error) {
      console.log(error);
    }
  }

  const getSearch = async (newPage, newRowsPerPage) => {

    const response = await axios
      .post("api/template-master/search", {
        templatecode:templateCode,
        name:name,
        templatefile:templateFile,
        templatetype:templatetype,
        themeCode:themeCode,
        isActive: isactive === true ? "Y" : "N",
        page: newPage,
        size: newRowsPerPage
      })
      .then((response) => {
        setSearchData(response.data.responseList);
        setTotalCount(response.data.numberOfItems);
      });
  };
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
    getSearch(newPage, rowsPerPage)

  };

  const handleChangeRowsPerPage = (event) => {
    const newRowsPerPage = parseInt(event.target.value, 10);
    setRowsPerPage(newRowsPerPage);
    setPage(0);
    getSearch(0, newRowsPerPage)
  };
 
  const getSelectNotificationTypeApi = async () => {
    try {
      const response = await axios.get("api/commonlist/groupcode/NOTIFICATION_TYPE")
      setnotificationTypeData(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {getSelectNotificationTypeApi(); }, [])


  return (
    <>
      <div className="buttons d-flex justify-content-end p-1 mt-3">
        <a className="btns pe-5" onClick={() => handleClickCreate()} style={{ textDecoration: "none" }}>
          <button className="submit-btn btn-sm m-2 px-5 py-1 text-white rounded-3 me-2" >Add</button>
        </a>
      </div>

      <div className="details  mx-5 mt-3 mb-5">
        <div className="contact">
          <form className="form-floating">
            <div className="box">
              <Form encType="multipart/form-data" className="px-3" >
                <div className="row">
<<<<<<< HEAD
                  <div className="col-md-4 mt-3">
                    <div class="select_shadow form-floating">
                      {/* <select className="ui dropdown form-select input-shadow border-0 " id="input" value={fromCurrDataSelect} onChange={(e) => setFromCurrDataSelect(e.target.value)}>
                        <option>--Please Select--</option>
                        {fromCurrData.map((s) => (<option>{s.optionLabel}</option>
                        ))}
                      </select> */}
                      <label for="input" style={{ fontSize: "16px", }}>Notify Type
                        <span><IoIosInformationCircleCustom tooltipMessage={std.NotifyType} /></span>
                      </label>
                    </div>
                  </div>
                  <div className="col-md-4 mt-3"><FormGroup type="text" label="Name" placeholder="" tooltipMessage={std.name} value={name} onChange={(e) => setName(e.target.value)} /></div>
                      <div className="col-md-4 mt-3"><FormGroup type="text" label="Template File" placeholder="" tooltipMessage={std.templateFile} value={templateFile} onChange={(e) => setTemplateFile(e.target.value)} /></div>
                    <div className="col-md-4 mt-3"><FormGroup type="text" label="Template Code" placeholder="" tooltipMessage={std.templateCode} value={templateCode} onChange={(e) => setTemplateCode(e.target.value)} /></div>
                   <div className="col-md-4 mt-3"><FormGroupRadio title={ButtonLabels.Active_Status} tooltipMessage={std.isactive} value={isactive} onChange={() => setIsActive(!isactive)} /></div>
=======
                <div className="col-md-4 mt-3"><SelectComponent placeholder="Notification Type" selectedOption={notificationTypeSelect} onChange={(e) => setnotificationTypeSelect(e.target.value)} dropdownlist={notificationTypeData} /></div>
                  <div className="col-md-4 mt-3"><FormGroup type="text" label="Name" placeholder="" value={name} onChange={(e) => setName(e.target.value)} /></div>
                      <div className="col-md-4 mt-3"><FormGroup type="text" label="Template File" placeholder="" value={templateFile} onChange={(e) => setTemplateFile(e.target.value)} /></div>
                    <div className="col-md-4 mt-3"><FormGroup type="text" label="Template Code" placeholder="" value={templateCode} onChange={(e) => setTemplateCode(e.target.value)} /></div>
                   <div className="col-md-4 mt-3"><FormGroupRadio title={ButtonLabels.Active_Status} value={isactive} onChange={() => setIsActive(!isactive)} /></div>
>>>>>>> 20203647b4132e40bff9328a7241f7d2c053ecf1
                </div>
              </Form>
            </div>
          </form>
          <div className="buttons d-flex justify-content-end p-1 mt-3">
            <div className="btns">
              <button className="submit-btn btn-sm m-2 px-4 py-2 text-white rounded-3 me-2" onClick={() => getSearch()}>Search</button>
            </div>
          </div>
          <div>
            <MaterialReactTable
              columns={columns}
              data={searchData}
              enablePagination={false}
              enableColumnOrdering
              enableEditing
              rowNumberDisplayMode='original'
              enableRowNumbers='true'
              positionActionsColumn='last'
              renderRowActions={({ row, table }) => (
                <>
                  <Box sx={{ display: "flex", gap: "1rem" }} >
                    <Tooltip arrow placement="left" title="Edit">
                      <a>
                        <button className="border-0 rounded-2 p-2" style={{ background: "#349F01", color: "#fff" }} onClick={() => {
                          getEditApi(row.original.otGlbTemplatemasterRfnum);
                          handleClickEdit();
                        }}>
                          <Edit />
                        </button>
                      </a>
                    </Tooltip>
                  </Box>
                </>
              )}
            />
            <TablePagination
               rowsPerPageOptions={[ 10, 20, 30]}
               component="div"
               count={totalCount}
               rowsPerPage={rowsPerPage}
               page={page}
               onPageChange={handleChangePage}
               onRowsPerPageChange={handleChangeRowsPerPage}
               showFirstButton
               showLastButton
            />
          </div>
        </div>
      </div>

    </>
  )
}

export default SearchTemplateDefinition;