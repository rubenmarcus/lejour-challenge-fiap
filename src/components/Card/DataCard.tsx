
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import {
    BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  } from 'recharts';


const useStyles = makeStyles({
    root: {
      maxWidth: 445,
    },
    media: {
      height: 140,
    },
  });

  interface DataCardProps {
      title: string,
      chartType: ChartDataTypes,
      chartData: Array<any>

  }

  type ChartDataTypes = 'bar' | 'pizza'
  
  export default function DataCard(props: DataCardProps) {
    const classes = useStyles();


    return (
        <Card className={classes.root}>
          <CardActionArea>
        
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
            {props.title}
              </Typography>

                {props.chartType == 'bar'?
            
                 BarChartComponent(props.chartData) : ''


            }


              <Typography variant="body2" color="textSecondary" component="p">
        
</Typography>

            
            </CardContent>
          </CardActionArea>
       
        </Card>
      );

  }


  const BarChartComponent = (chartData) => {
   return( 
   
   <BarChart width={550} height={450} data={chartData}  margin={{ top: 5, right: 0,  bottom: 5  }} >
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey="name" tick={{ fontSize: 12, width: 150 }} />
    <YAxis dataKey="value" domain={[0, 1000000]}   tick={{ fontSize: 12, width: 150 }} />
    <Tooltip  formatter={(value) => new Intl.NumberFormat('en').format(value)} />
    <Legend />
    <Bar dataKey="value" fill="#82ca9d" />
  </BarChart>
   );
  }