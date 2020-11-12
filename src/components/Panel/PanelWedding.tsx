import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import React, { forwardRef } from "react";
import MediaCard from "../Card/MediaCard";
import DataCard from "../Card/DataCard";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme: Theme) =>
createStyles({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}),
);




export const PanelWedding = (data) => {

    const classes = useStyles();
    const dataPanel = data.data;
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <DataCard
            title={"Gráfico de Budget Total"}
            chartType="bar"
            chartData={dataPanel.budgetData}
          />
        </Grid>

        <Grid item xs={6}>
          <DataCard
            title={"% por tipo de casamento"}
            chartType="pizza"
            chartData={dataPanel.chartPercentage}
          />
        </Grid>
      </Grid>

      <Grid container spacing={3}>
        <Grid item xs={3}>
          <MediaCard data={dataPanel.dataWedding} />
        </Grid>
        <Grid item xs={3}>
          <MediaCard data={dataPanel.dataClassic} />
        </Grid>
        <Grid item xs={3}>
          <MediaCard data={dataPanel.dataRustico} />
        </Grid>
        <Grid item xs={3}>
          <MediaCard data={dataPanel.dataModerno} />
        </Grid>
      </Grid>
    </div>
  );
};
