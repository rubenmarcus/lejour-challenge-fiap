import React, { forwardRef } from 'react';
import dataFetch from '../../data/fetch';
import MaterialTable from 'material-table';
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
import { Icons } from 'material-table';
import MediaCard from '../Card/MediaCard'
import DataCard from '../Card/DataCard'
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import {
  BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
import { sumNums, filterByValue, AvgNums, returnSums, numberToReal } from '../../helpers';

interface TodoProps {
  endpoint: string,
}

interface TodoState {
  items: dataApi[],
  weddingsUser: Array<any>
}
type dataApi = {

  BUDGET: number;
}

export default class PanelComponent extends React.Component<TodoProps> {
  public state = {
    items: [],
    budget: [],
    weddingsUser: [],
    favorites: []
  }




  constructor(props: TodoProps) {
    super(props);
    this.state = {
      items: [],
      budget: [],
      weddingsUser: [],
      favorites: []
    }
  }

  componentDidMount() {

    const stringParams = "limit=1000000&query_type=and";
    const queryParams = new URLSearchParams(stringParams);
    
    const stringParamsA = new URLSearchParams("limit=1000000&query_type=and");

    dataFetch('user', stringParamsA)
    .then(items => { 
      this.setState({ weddingsUser:items })
      // dataFetch('wedding', queryParams)
      // .then(items => this.setState({ items: items, budget: items.BUDGET })).then(
      // )
    
    });


    dataFetch('wedding_favorites', stringParamsA)
    .then(items => { 
      this.setState({ favorites:items })
      // dataFetch('wedding', queryParams)
      // .then(items => this.setState({ items: items, budget: items.BUDGET })).then(
      // )
    
    });


    dataFetch(this.props.endpoint, queryParams)
      .then(items => this.setState({ items: items, budget: items.BUDGET })).then(
      )
  }

  



  render() {

    if (this.state.items.length === 0) {
      return <div>Loading...</div>
    }


    const dataType = this.props.endpoint;
    // let budget = objArray.map(({ foo }) => foo)

    let budget = [1, 2, 3, 4]
    budget = this.state.items.map((item: any) => item.BUDGET);







    const findMax = (...budget) => {
      let currentMax = budget[0]; // 2

      for (const number of budget) {
        if (number > currentMax) {
         // console.log(number, currentMax);
          currentMax = number;
        }
      }
      return currentMax;
    };

    const maxNum = findMax(...budget);

    const maxNumReais = maxNum ? numberToReal(maxNum) : '';

    const resultUser = this.state.weddingsUser.map((item: any) => {return item.ID });
    const favs = this.state.favorites.map((item: any) => {return item });



    const result = this.state.items.map((item: any) => ({ budget: parseInt(item.BUDGET), guests: item.NUMBER_OF_GUESTS, style: item.STYLE, wedding_id: item.ID, owner_id: item.OWNER_ID }));

    const weddingId = this.state.items.map((item: any) => { return item.ID });
    const ownerId = this.state.items.map((item: any) => { return item.OWNER_ID });

    var userswithWedding = resultUser.filter(i => ownerId.indexOf(i) !== -1);


   //  console.log('weddingID', weddingId, 'ownerID',ownerId, 'users with wedding', userswithWedding)


    const classic = result ? filterByValue(result, 'classico') : '';
    const rustico = result ? filterByValue(result, 'rustico') : '';
    const moderno = result ? filterByValue(result, 'moderno') : '';
    const budgetTotal =  this.state.items.map((item: any) => { return item.BUDGET} );
    const guests =  this.state.items.map((item: any) => { return item.NUMBER_OF_GUESTS} );

    const classicMax = classic.map((item:any) => {return item.budget});

    console.log(classicMax , findMax(...classicMax), )


    const GuestSum = {
      classico: sumNums({ res: result, field: 'classico' }, 'guests'),
      moderno: sumNums({ res: result, field: 'moderno' }, 'guests'),
      rustico: sumNums({ res: result, field: 'rustico' }, 'guests'),
    }

    const BudgetSum = {
      classico: sumNums({ res: result, field: 'classico' }, 'budget'),
      moderno: sumNums({ res: result, field: 'moderno' }, 'budget'),
      rustico: sumNums({ res: result, field: 'rustico' }, 'budget'),
    }

     const maxClass = numberToReal(findMax(...classicMax));


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

    const totalBudget = BudgetSum.classico + BudgetSum.rustico + BudgetSum.moderno
    const totalGuests = GuestSum.classico + GuestSum.rustico + GuestSum.moderno
    // const averageBudget = totalBudget ? totalBudget.reduce((a, v, i) => (a * i + v) / (i + 1), 0) : '';
    // const budgetA = convNumtoStr(this.state.budget);
    
    // const avgBudget =  totalBudget ? totalBudget.toString().reduce((a, v, i) => (a * i + v) / (i + 1), 0): '' ;
   
 

    // const averageBudget = budgetTotal ? convNumtoStr(budgetTotal).reduce((a, v, i) => (a * i + v) / (i + 1), 0) : '';
  //  console.log('total',AvgNums(budgetTotal))

    const imageCas = 'https://see.news/wp-content/uploads/2019/11/Marriage-Wayfinder-Blog-Featured-Image-750x375.jpg';
    const imageRus = 'https://bellethemagazine.com/wp-content/uploads/2018/05/Outdoor-burgundy-rustic-wedding-ceremony-615x410.jpeg'
    const imageMod = 'https://greenweddingshoes.com/wp-content/uploads/2019/08/loveclub-wedding-12.jpg';
    const imageClass = 'https://1hq6f244nzqssy4d8fp6y7re-wpengine.netdna-ssl.com/wp-content/uploads/2018/04/elegant-wedding-classic-ballroom-wedding-inspiration20.jpg';
   
    
    // Calcula o Número médio de Guests  
    
    const avgGuests = parseInt(AvgNums(guests));


    // Budget Total / Soma de Todos os Guests
    let avgGuestSpend = totalBudget  / returnSums(guests);
    
    
    
    avgGuestSpend = numberToReal(parseInt(avgGuestSpend.toString()));
    const dataRustico = {
      content: rustico.length,
      title: "Casamentos Rusticos",
      image: imageRus,
      sum: numberToReal(GuestSum.rustico)
    }
    const dataModerno = {
      content: moderno.length,
      title: "Casamentos Modernos",
      image: imageMod,
      sum: numberToReal(GuestSum.moderno)
    }

    const dataClassic = {
      content: classic.length,
      title: "Casamentos Classicos",
      image: imageClass,
      sum: numberToReal(GuestSum.classico),
       maxVal: maxClass
    }
    const dataWedding = {
      content: classic.length + moderno.length + rustico.length,
      maxVal: maxNumReais,
      guests: returnSums(guests),
      AvgGuests: avgGuests,
      image: imageCas,
      medio:  numberToReal(AvgNums(budgetTotal)),
      medioGasto: avgGuestSpend,
      title: "Casamentos",
      sum: numberToReal(totalBudget)
    }


    const chartData = [
      {
        name: 'Total',
        value: totalBudget,
        guests: totalGuests
      },
      {
        name: 'Classico',
        value: BudgetSum.classico,
        guests: GuestSum.classico

      },
      {
        name: 'Rusticos',
        value: BudgetSum.rustico,
        guests: GuestSum.rustico
      },
      {
        name: 'Modernos',
        value: BudgetSum.moderno,
        guests: GuestSum.moderno
      }
    ]
    return (
      <div>





        {dataType === 'wedding' ?
          <div>

            <div>
              <Grid container spacing={3}>


                <Grid item xs={6}>
                  <DataCard title={'Gráfico de Budget Total'} chartType="bar" chartData={chartData} />
                </Grid>



                <Grid item xs={6}>
                  <DataCard title={'Gráfico de Budget Total'} chartType="bar" chartData={chartData} />
                </Grid>
              </Grid>
            </div>

            <Grid container spacing={3}>
              <Grid item xs={3}>
                <MediaCard data={dataWedding} />
              </Grid>
              <Grid item xs={3}>
                <MediaCard data={dataClassic} />
              </Grid>
              <Grid item xs={3}>
                <MediaCard data={dataRustico} />
              </Grid>
              <Grid item xs={3}>
                <MediaCard data={dataModerno} />

              </Grid>
            </Grid>
            <br />

            <MaterialTable
              icons={tableIcons}
              columns={[
                { title: 'Budget', field: 'budget' },
                { title: 'Estilo', field: 'style' },
                { title: 'Convidados', field: 'guests' },
              ]}
              data={result}
              localization={{ toolbar: { searchPlaceholder: 'Pesquisar' } }}
              title="Tabela de Casamento"
            /> </div> :
          ''}

      </div>
    )
  }
}