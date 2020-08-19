import React from 'react';
import { Button, ButtonGroup} from "reactstrap";
import PropTypes from "prop-types";

const FilterController = ({handleFilter,isActive}) =>{
   return(
    <ButtonGroup>
        <Button onClick={ () => handleFilter('all')} className={isActive?'active':''}>All</Button>
        <Button onClick={ () => handleFilter('running')} className={isActive?'active':''}>Running</Button>
        <Button onClick={ () => handleFilter('completed')}>Completed</Button>
    </ButtonGroup>)
}

FilterController.propTypes = {
    handleFilter : PropTypes.func.isRequired
}
export default FilterController;
