import React, { forwardRef } from 'react';
import dataFetch from '../../data/fetch';
import  MaterialTable from 'material-table';
import { ListItemSecondaryAction } from '@material-ui/core';
import AddBox from '@material-ui/icons/AddBox';
import ArrowUpward from '@material-ui/icons/ArrowUpward';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';
import {Icons} from 'material-table';


interface TodoProps {
  endpoint: string,
}

interface TodoState{
  items: dataApi[]
}
type dataApi = {
  
  BUDGET: number;
}

export default class PanelComponent extends React.Component<TodoProps> {
  public state = {
   items: [],
    budget: []
  }

  
  

  constructor(props: TodoProps) {
    super(props);
    this.state = {
      items: [],
      budget: []
    }
  }

  componentDidMount() {

    const stringParams = "limit=1000000&query_type=and";
    const queryParams = new URLSearchParams(stringParams);


    dataFetch(this.props.endpoint, queryParams)
      .then(items => this.setState({ items: items , budget: items.BUDGET}))
  }

  render() {
    // const { items } = this.props;
    // If necessary, you can render some placeholder until the data is loaded
    //if (items.length === 0) {
    //  return <div>Loading...</div>
    //}
//console.log(this.state, this.props , 'aaaa')

console.log('items ', this.state.items)
    const dataType = this.props.endpoint;
    // let budget = objArray.map(({ foo }) => foo)

    const colums = ['aaaa','bbbb']
    let budget = this.state.items.map( (item: any) => item.BUDGET);
    var result = this.state.items.map((item:any)  => ({ budget: item.BUDGET, guests: item.NUMBER_OF_GUESTS, style: item.STYLE }));


    //  const a = this.state.items.map((item: dataApi) => (
    //     budget = item.BUDGET
    //   ));

     console.log('budget', result)
     const tableIcons: Icons = {
      Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
      Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
      Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
      Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
      DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
      Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
      Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
      Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
      FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
      LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
      NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
      PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
      ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
      Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
      SortArrow: forwardRef((props, ref) => <ArrowUpward {...props} ref={ref} />),
      ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
      ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />),
    };


    // const a = this.state.items.map((item: dataApi) => (
    //     this.state.dataTable.BUDGET = item.BUDGET
    //   ));

    //   const b =  {brands.map((brand) => {
    //     return <p>{brand}</p>;
    //   })}

    return (
      <div>



      <MaterialTable
           icons={tableIcons}
           columns={[
             { title: 'Budget', field: 'budget' },
             { title: 'Estilo', field: 'style' },
             { title: 'Convidados', field: 'guests' },
           ]}
           data={result}
           title="Tabela de Casamento"
         /> 


       {/* {dataType === 'wedding' ?  :
                ''}  */}
    
      </div>
    )
  }
}