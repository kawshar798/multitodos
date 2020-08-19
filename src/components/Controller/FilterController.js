import React from 'react';
import { Button, ButtonGroup} from "reactstrap";
import PropTypes from "prop-types";

const FilterController = ({handleFilter,isActive}) =>{
   return(
    <ButtonGroup>
        <Button onClick={ () => handleFilter('all')} className={isActive === 'all'?'active':''}>All</Button>
        <Button onClick={ () => handleFilter('running')} className={isActive === 'running'?'active':''}>Running</Button>
        <Button onClick={ () => handleFilter('completed')} className={isActive === 'completed'?'active':''}>Completed</Button>
    </ButtonGroup>)
}

FilterController.propTypes = {
    handleFilter : PropTypes.func.isRequired
}
export default FilterController;
