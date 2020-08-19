import React from 'react'
import SearchPanel from './SearchPanel'
import PropTypes from "prop-types";
import { Row, Col } from 'reactstrap';
import FilterController from './FilterController';
import ViewControler from './ViewFilter';
import BulkController from './Bulkcontroller';
 const  Controller = ({term,handleSearch,toggleForm,handleFilter,view,changeView,clearSelected,clearCompleted,reset}) => {
    return (
        <div>
            <SearchPanel
            term={term}
            handleSearch={handleSearch}
            toggleForm={toggleForm}
            />
            <Row className="my-4">
                <Col md={{ size: 4}}>
                    <FilterController handleFilter={handleFilter}  />
                </Col>
                <Col md={{ size: 4}}>
                    <ViewControler
                    view={view}
                    changeView={changeView}
                    />
                </Col>
                <Col md={{ size: 4}}>
                    <BulkController
                    clearSelected={clearSelected}
                    clearCompleted={clearCompleted}
                    reset={reset}
                    />
                </Col>
            </Row>
        </div>
    )
}
Controller.propTypes = {
    term:PropTypes.string.isRequired,
    handleSearch:PropTypes.func.isRequired,
    toggleForm:PropTypes.func.isRequired,
    handleFilter:PropTypes.func.isRequired,
    changeView:PropTypes.func.isRequired,
    clearSelected:PropTypes.func.isRequired,
    clearCompleted:PropTypes.func.isRequired,
    reset:PropTypes.func.isRequired,
    view:PropTypes.string.isRequired,
  
}
export default Controller;
