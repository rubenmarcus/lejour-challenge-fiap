import { filterByValue, numberToReal, returnSums, sumNums, findMax, AvgNums, Percentage } from "../helpers";

export default function WeddingService(data) {
  const budget = data.map((item: any) => item.BUDGET);

  const resultWedding = data.map((item: any) => ({
    budget: parseInt(item.BUDGET),
    guests: item.NUMBER_OF_GUESTS,
    style: item.STYLE,
    wedding_id: item.ID,
    owner_id: item.OWNER_ID,
  }));

  const classic = resultWedding ? filterByValue(resultWedding, "classico") : "";
  const rustico = resultWedding ? filterByValue(resultWedding, "rustico") : "";
  const moderno = resultWedding ? filterByValue(resultWedding, "moderno") : "";

  const classicMax = classic.map((item: any) => {
    return item.budget;
  });
  const budgetTotal = data.map((item: any) => {
    return item.BUDGET;
  });
  const guests = data.map((item: any) => {
    return item.NUMBER_OF_GUESTS;
  });

  //  console.log(classicMax , findMax(...classicMax), )

  const GuestSum = {
    classico: sumNums({ res: resultWedding, field: "classico" }, "guests"),
    moderno: sumNums({ res: resultWedding, field: "moderno" }, "guests"),
    rustico: sumNums({ res: resultWedding, field: "rustico" }, "guests"),
  };

  const BudgetSum = {
    classico: sumNums({ res: resultWedding, field: "classico" }, "budget"),
    moderno: sumNums({ res: resultWedding, field: "moderno" }, "budget"),
    rustico: sumNums({ res: resultWedding, field: "rustico" }, "budget"),
  };

  const totalBudget =
    BudgetSum.classico + BudgetSum.rustico + BudgetSum.moderno;
  const totalGuests = GuestSum.classico + GuestSum.rustico + GuestSum.moderno;

  const maxClass = numberToReal(findMax(...classicMax));

  const avgGuests = parseInt(AvgNums(guests));

  // Budget Total / Soma de Todos os Guests
  let avgGuestSpend = totalBudget / returnSums(guests);

  avgGuestSpend = numberToReal(parseInt(avgGuestSpend.toString()));

  const maxNum = findMax(...budget);

  const maxNumReais = maxNum ? numberToReal(maxNum) : "";
  const imageCas =
    "https://see.news/wp-content/uploads/2019/11/Marriage-Wayfinder-Blog-Featured-Image-750x375.jpg";
  const imageRus =
    "https://bellethemagazine.com/wp-content/uploads/2018/05/Outdoor-burgundy-rustic-wedding-ceremony-615x410.jpeg";
  const imageMod =
    "https://greenweddingshoes.com/wp-content/uploads/2019/08/loveclub-wedding-12.jpg";
  const imageClass =
    "https://1hq6f244nzqssy4d8fp6y7re-wpengine.netdna-ssl.com/wp-content/uploads/2018/04/elegant-wedding-classic-ballroom-wedding-inspiration20.jpg";

  const dataRustico = {
    content: rustico.length,
    title: "Casamentos Rusticos",
    image: imageRus,
    sum: numberToReal(GuestSum.rustico),
  };
  const dataModerno = {
    content: moderno.length,
    title: "Casamentos Modernos",
    image: imageMod,
    sum: numberToReal(GuestSum.moderno),
  };

  const dataClassic = {
    content: classic.length,
    title: "Casamentos Classicos",
    image: imageClass,
    sum: numberToReal(GuestSum.classico),
    maxVal: maxClass,
  };
  const dataWedding = {
    content: classic.length + moderno.length + rustico.length,
    maxVal: maxNumReais,
    guests: returnSums(guests),
    AvgGuests: avgGuests,
    image: imageCas,
    medio: numberToReal(AvgNums(budgetTotal)),
    medioGasto: avgGuestSpend,
    title: "Casamentos",
    sum: numberToReal(totalBudget),
  };
  const totalWedding = classic.length + moderno.length + rustico.length;

  const chartPercentage = [
    {
      name: "Rustico",
      value: Percentage(rustico.length, totalWedding),
    },
    {
      name: "Classico",
      value: Percentage(classic.length, totalWedding),
    },
    {
      name: "Moderno",
      value: Percentage(moderno.length, totalWedding),
    },
  ];

  const chartData = [
    {
      name: "Total",
      value: totalBudget,
      guests: totalGuests,
    },
    {
      name: "Classico",
      value: BudgetSum.classico,
      guests: GuestSum.classico,
    },
    {
      name: "Rusticos",
      value: BudgetSum.rustico,
      guests: GuestSum.rustico,
    },
    {
      name: "Modernos",
      value: BudgetSum.moderno,
      guests: GuestSum.moderno,
    },
  ];

  const finalObj = {
    result: resultWedding,
    budgetData: chartData,
    chartPercentage: chartPercentage,
    dataWedding: dataWedding,
    dataClassic: dataClassic,
    dataRustico: dataRustico,
    dataModerno: dataModerno,
  };

  return finalObj;
}
