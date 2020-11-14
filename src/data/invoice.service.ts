import {
  filterByValue,
  numberToReal,
  returnSums,
  sumNums,
  findMax,
  AvgNums,
  applyFilter,
  propbyFilter,
  Percentage,
} from "../helpers";

export default function InvoiceService(data) {
  const invoice = data.map((item: any) => ({
    accepted: item.ACCEPTED,
    month: item.CREATED_AT.substr(5, 2),
    year: item.CREATED_AT.substr(0, 4),
    costs: item.VENDOR_AMOUNT,
    amount: item.AMOUNT,
    profit: item.AMOUNT,
    netprofit: item.AMOUNT - item.VENDOR_AMOUNT,
    wedding_id: item.WEDDING_ID,
    category: item.VENDOR_CATEGORY,
  }));


  const invoiceAccepted = filterByValue(invoice, "true");
  const invoicenotAccepted = filterByValue(invoice, "false");

  const invoicenotAccepted2019 = filterByValue(invoicenotAccepted, "2019");
  const invoicenotAccepted2020 = filterByValue(invoicenotAccepted, "2020");
  const invoiceAccepted2019 = filterByValue(invoiceAccepted, "2019");
  const invoiceAccepted2020 = filterByValue(invoiceAccepted, "2020");



  const invoiceAcceptedbyMonth2020 = [
    applyFilter(invoiceAccepted2020, { month: ["01"] }),
    applyFilter(invoiceAccepted2020, { month: ["02"] }),
    applyFilter(invoiceAccepted2020, { month: ["03"] }),
    applyFilter(invoiceAccepted2020, { month: ["04"] }),
    applyFilter(invoiceAccepted2020, { month: ["05"] }),
    applyFilter(invoiceAccepted2020, { month: ["06"] }),
    applyFilter(invoiceAccepted2020, { month: ["07"] }),
    applyFilter(invoiceAccepted2020, { month: ["08"] }),
    applyFilter(invoiceAccepted2020, { month: ["09"] }),
    applyFilter(invoiceAccepted2020, { month: ["10"] }),
    applyFilter(invoiceAccepted2020, { month: ["11"] }),
    applyFilter(invoiceAccepted2020, { month: ["12"] }),
  ];

  const invoiceAcceptedbyMonth2019 = [
    applyFilter(invoiceAccepted2019, { month: ["09"] }),
    applyFilter(invoiceAccepted2019, { month: ["10"] }),
    applyFilter(invoiceAccepted2019, { month: ["11"] }),
    applyFilter(invoiceAccepted2019, { month: ["12"] }),
  ];

  const invoicebyMonth = [
    applyFilter(invoice, { month: ["01"] }),
    applyFilter(invoice, { month: ["02"] }),
    applyFilter(invoice, { month: ["03"] }),
    applyFilter(invoice, { month: ["04"] }),
    applyFilter(invoice, { month: ["05"] }),
    applyFilter(invoice, { month: ["06"] }),
    applyFilter(invoice, { month: ["07"] }),
    applyFilter(invoice, { month: ["08"] }),
    applyFilter(invoice, { month: ["09"] }),
  ]


  const profitMonth2019 = [
    returnSums(propbyFilter(invoiceAcceptedbyMonth2019[0], "profit")),
    returnSums(propbyFilter(invoiceAcceptedbyMonth2019[1], "profit")),
    returnSums(propbyFilter(invoiceAcceptedbyMonth2019[2], "profit")),
    returnSums(propbyFilter(invoiceAcceptedbyMonth2019[3], "profit")),
  ];

  const AvgProfitMonth2019 = [
    parseInt(AvgNums(propbyFilter(invoiceAcceptedbyMonth2019[0], "profit"))),
    parseInt(AvgNums(propbyFilter(invoiceAcceptedbyMonth2019[1], "profit"))),
    parseInt(AvgNums(propbyFilter(invoiceAcceptedbyMonth2019[2], "profit"))),
    parseInt(AvgNums(propbyFilter(invoiceAcceptedbyMonth2019[3], "profit"))),
  ];

  const AvgProfitMonth2020 = [
    parseInt(AvgNums(propbyFilter(invoiceAcceptedbyMonth2020[0], "profit"))),
    parseInt(AvgNums(propbyFilter(invoiceAcceptedbyMonth2020[1], "profit"))),
    parseInt(AvgNums(propbyFilter(invoiceAcceptedbyMonth2020[2], "profit"))),
    parseInt(AvgNums(propbyFilter(invoiceAcceptedbyMonth2020[3], "profit"))),
    parseInt(AvgNums(propbyFilter(invoiceAcceptedbyMonth2020[4], "profit"))),
    parseInt(AvgNums(propbyFilter(invoiceAcceptedbyMonth2020[5], "profit"))),
    parseInt(AvgNums(propbyFilter(invoiceAcceptedbyMonth2020[6], "profit"))),
    parseInt(AvgNums(propbyFilter(invoiceAcceptedbyMonth2020[7], "profit"))),
    parseInt(AvgNums(propbyFilter(invoiceAcceptedbyMonth2020[8], "profit"))),
  ];

  const profitMonth2020 = [
    returnSums(propbyFilter(invoiceAcceptedbyMonth2020[0], "profit")),
    returnSums(propbyFilter(invoiceAcceptedbyMonth2020[1], "profit")),

    returnSums(propbyFilter(invoiceAcceptedbyMonth2020[2], "profit")),

    returnSums(propbyFilter(invoiceAcceptedbyMonth2020[3], "profit")),

    returnSums(propbyFilter(invoiceAcceptedbyMonth2020[4], "profit")),

    returnSums(propbyFilter(invoiceAcceptedbyMonth2020[5], "profit")),

    returnSums(propbyFilter(invoiceAcceptedbyMonth2020[6], "profit")),
    returnSums(propbyFilter(invoiceAcceptedbyMonth2020[7], "profit")),
    returnSums(propbyFilter(invoiceAcceptedbyMonth2020[8], "profit")),
  ];

  const costsMonth2019 = [
    returnSums(propbyFilter(invoiceAcceptedbyMonth2019[0], "costs")),
    returnSums(propbyFilter(invoiceAcceptedbyMonth2019[1], "costs")),
    returnSums(propbyFilter(invoiceAcceptedbyMonth2019[2], "costs")),

    returnSums(propbyFilter(invoiceAcceptedbyMonth2019[3], "costs")),
  ];
  const costsMonth2020 = [
    returnSums(propbyFilter(invoiceAcceptedbyMonth2020[0], "costs")),
    returnSums(propbyFilter(invoiceAcceptedbyMonth2020[1], "costs")),

    returnSums(propbyFilter(invoiceAcceptedbyMonth2020[2], "costs")),

    returnSums(propbyFilter(invoiceAcceptedbyMonth2020[3], "costs")),

    returnSums(propbyFilter(invoiceAcceptedbyMonth2020[4], "costs")),

    returnSums(propbyFilter(invoiceAcceptedbyMonth2020[5], "costs")),

    returnSums(propbyFilter(invoiceAcceptedbyMonth2020[6], "costs")),
    returnSums(propbyFilter(invoiceAcceptedbyMonth2020[7], "costs")),
    returnSums(propbyFilter(invoiceAcceptedbyMonth2020[8], "costs")),
  ];


  const costs2020 = invoiceAccepted2020.map((item: any) => {
    return item.costs;
  });
  const costs2019 = invoiceAccepted2019.map((item: any) => {
    return item.costs;
  });

  const profit2020 = invoiceAccepted2020.map((item: any) => {
    return item.profit;
  });

  const profit2019 = invoiceAccepted2019.map((item: any) => {
    return item.profit;
  });
  const netprofit2020 = invoiceAccepted2020.map((item: any) => {
    return item.netprofit;
  });

  const netprofit2019 = invoiceAccepted2019.map((item: any) => {
    return item.netprofit;
  });

  const vendors = invoice.map((item: any) => {
    return item.category;
  });


  const invoicebyVendor = [
    applyFilter(invoice, { category: ["espaco"] }),
    applyFilter(invoice, { category: ["decoracao-cenografia"] }),
    applyFilter(invoice, { category: ["banda"] }),
    applyFilter(invoice, { category: ["assessoria-de-casamento"] }),
    applyFilter(invoice, { category: ["dj"] }),
    applyFilter(invoice, { category: ["som-iluminacao"] }),
    applyFilter(invoice, { category: ["servico-de-bar-bartender"] }),
  ]

  const invoiceAcceptedbyVendor = [
    applyFilter(invoiceAccepted, { category: ["espaco"] }),
    applyFilter(invoiceAccepted, { category: ["decoracao-cenografia"] }),
    applyFilter(invoiceAccepted, { category: ["banda"] }),
    applyFilter(invoiceAccepted, { category: ["assessoria-de-casamento"] }),
    applyFilter(invoiceAccepted, { category: ["dj"] }),
    applyFilter(invoiceAccepted, { category: ["som-iluminacao"] }),
    applyFilter(invoiceAccepted, { category: ["servico-de-bar-bartender"] }),
  ]

  const vendorProfit =  (data) => data.map((item: any) => {

    return item.profit
  });

  const vendorNet  = (data) => data.map((item: any) => {

    return item.netprofit
  });

  const vendorCosts = (data) => data.map((item: any) => {

    return item.costs
  });



  const chartVendorValue = [
      {
          name: 'Espaço',
          CustoTotal: returnSums(vendorCosts(invoiceAcceptedbyVendor[0])),
          LucroBruto: returnSums(vendorProfit(invoiceAcceptedbyVendor[0])),
          LucroLiquido: returnSums(vendorNet(invoiceAcceptedbyVendor[0])),

      },
      {
        name: 'Cenografia',
        CustoTotal: returnSums(vendorCosts(invoiceAcceptedbyVendor[1])),
        LucroBruto: returnSums(vendorProfit(invoiceAcceptedbyVendor[1])),
        LucroLiquido: returnSums(vendorNet(invoiceAcceptedbyVendor[1])),

        
    },
    {
        name: 'Assesoria de Casamento',
        CustoTotal: returnSums(vendorCosts(invoiceAcceptedbyVendor[2])),
        LucroBruto: returnSums(vendorProfit(invoiceAcceptedbyVendor[2])),
        LucroLiquido: returnSums(vendorNet(invoiceAcceptedbyVendor[2])),

    }
,
    {
        name: 'DJ',
        CustoTotal: returnSums(vendorCosts(invoiceAcceptedbyVendor[3])),
        LucroBruto: returnSums(vendorProfit(invoiceAcceptedbyVendor[3])),
        LucroLiquido: returnSums(vendorNet(invoiceAcceptedbyVendor[3])),

    },
    {
        name: 'Som Iluminação',
        CustoTotal: returnSums(vendorCosts(invoiceAcceptedbyVendor[4])),
        LucroBruto: returnSums(vendorProfit(invoiceAcceptedbyVendor[4])),
        LucroLiquido: returnSums(vendorNet(invoiceAcceptedbyVendor[4])),

    },
    {
        name: 'Bar',
        CustoTotal: returnSums(vendorCosts(invoiceAcceptedbyVendor[5])),
        LucroBruto: returnSums(vendorProfit(invoiceAcceptedbyVendor[5])),
        LucroLiquido: returnSums(vendorNet(invoiceAcceptedbyVendor[5])),

    }
  ]

  const chartInvoicesByVendor = [ 
    { name: "Espaço", value:  Percentage(invoicebyVendor[0].length, invoice.length) },
    { name: "Cenografia", value:  Percentage(invoicebyVendor[1].length, invoice.length) },
    { name: "Assesoria de Casamento", value:  Percentage(invoicebyVendor[2].length, invoice.length) },
    { name: "DJ", value:  Percentage(invoicebyVendor[3].length, invoice.length) },
    { name: "Som Iluminação", value:  Percentage(invoicebyVendor[4].length, invoice.length) },
    { name: "Bar", value:  Percentage(invoicebyVendor[5].length, invoice.length) },

  ]


  const chartInvoicesByMonth = [
    { name: "Janeiro", value:  Percentage(invoicebyMonth[0].length, invoice.length) },
    { name: "Fevereiro", value: Percentage(invoicebyMonth[1].length, invoice.length) },
    { name: "Março", value:Percentage(invoicebyMonth[2].length, invoice.length) },
    { name: "Abril", value: Percentage(invoicebyMonth[3].length, invoice.length) },
    { name: "Maio", value: Percentage(invoicebyMonth[4].length, invoice.length) },
    { name: "Junho", value: Percentage(invoicebyMonth[5].length, invoice.length)},

    { name: "Julho", value: Percentage(invoicebyMonth[6].length, invoice.length) },

    { name: "Agosto", value: Percentage(invoicebyMonth[7].length, invoice.length) },
    { name: "Setembro", value: Percentage(invoicebyMonth[8].length, invoice.length) },
  ];

  const TotalCost = returnSums(costs2020) + returnSums(costs2019);
  const TotalProfit = returnSums(netprofit2020) + returnSums(netprofit2019);

  const TotalBoth = TotalCost + TotalProfit;

  const chartInovicesRadius = [
    {
      name: "Invoices Aprovados ",
      value: Percentage(invoiceAccepted.length, invoice.length),
    },
    {
      name: "Invoices Recusados",
      value: Percentage(invoicenotAccepted.length, invoice.length),
    },
  ];

  const chartProfitxCostsRadius = [
    {
      name: "Lucro Liquido",
      value: Percentage(TotalProfit, TotalBoth),
    },
    {
      name: "Custo Total",
      value: Percentage(TotalCost, TotalBoth),
    },
  ];

  const chartProfitxCosts = [
    {
      name: "Set/2019",
      LucroBruto: profitMonth2019[0],
      CustoTotal: costsMonth2019[0],
      LucroMedio: AvgProfitMonth2019[0],
    },
    {
      name: "Out/2019",
      LucroBruto: profitMonth2019[1],
      CustoTotal: costsMonth2019[1],
      LucroMedio: AvgProfitMonth2019[1],
    },
    {
      name: "Nov/2019",
      LucroBruto: profitMonth2019[2],
      CustoTotal: costsMonth2019[2],
      LucroMedio: AvgProfitMonth2019[2],
    },
    {
      name: "Dez/2019",
      LucroBruto: profitMonth2019[3],
      CustoTotal: costsMonth2019[3],
      LucroMedio: AvgProfitMonth2019[3],
    },
    {
      name: "Jan/2020",
      LucroBruto: profitMonth2020[0],
      CustoTotal: costsMonth2020[0],
      LucroMedio: AvgProfitMonth2020[0],
    },
    {
      name: "Fev/2020",
      LucroBruto: profitMonth2020[1],
      CustoTotal: costsMonth2020[1],
      LucroMedio: AvgProfitMonth2020[1],
    },
    {
      name: "Mar/2020",
      LucroBruto: profitMonth2020[2],
      CustoTotal: costsMonth2020[2],
      LucroMedio: AvgProfitMonth2020[2],
    },
    {
      name: "Abr/2020",
      LucroBruto: profitMonth2020[3],
      CustoTotal: costsMonth2020[3],
      LucroMedio: AvgProfitMonth2020[3],
    },
    {
      name: "Mai/2020",
      LucroBruto: profitMonth2020[4],
      CustoTotal: costsMonth2020[4],
      LucroMedio: AvgProfitMonth2020[4],
    },
    {
      name: "Jun/2020",
      LucroBruto: profitMonth2020[5],
      CustoTotal: costsMonth2020[5],
      LucroMedio: AvgProfitMonth2020[5],
    },
    {
      name: "Jul/2020",
      LucroBruto: profitMonth2020[6],
      CustoTotal: costsMonth2020[6],
      LucroMedio: AvgProfitMonth2020[6],
    },
    {
      name: "Ago/2020",
      LucroBruto: profitMonth2020[7],
      CustoTotal: costsMonth2020[7],
      LucroMedio: AvgProfitMonth2020[7],
    },
    {
      name: "Set/2020",
      LucroBruto: profitMonth2020[8],
      CustoTotal: costsMonth2020[8],
      LucroMedio: AvgProfitMonth2020[8],
    },
  ];

  const profitTotal = returnSums(profit2020) + returnSums(profit2019);
  const costsTotal = returnSums(costs2020) + returnSums(costs2019);
  const netTotal = profitTotal - costsTotal;

  const returnObj = {
    invoices: {
      total: invoice.length,
    },
    charts: {
      profitxcosts: chartProfitxCosts,
      profitxcostsradial: chartProfitxCostsRadius,
      invoices: chartInovicesRadius,
      invoicesbyMonth: chartInvoicesByMonth,
      InvoicesByVendor: chartInvoicesByVendor,
      Vendor: chartVendorValue
    },
    profit: {
      y_2020: returnSums(profit2020),
      y_2019: returnSums(profit2019),
      total: numberToReal(returnSums(profit2020) + returnSums(profit2019)),
      line: dataLine({ y2019: profit2019, y2020: profit2020 }),
      year: {
        y2019: dataLine(profit2019, "2019"),
        y2020: dataLine(profit2020, "2020"),
      },
      net:numberToReal(  netTotal)
    },
    costs: {
      y_2020: returnSums(costs2020),
      y_2019: returnSums(costs2019),
      total:numberToReal( returnSums(costs2020) + returnSums(costs2019)),
      line: dataLine({ y2019: costs2019, y2020: costs2020 }),
      year: {
        y2019: dataLine(costs2019, "2019"),
        y2020: dataLine(costs2020, "2020"),
      },
    },
    accepted: {
      data: invoiceAccepted,
      total: invoiceAccepted.length,
      line: dataLine({
        y2019: invoiceAccepted2019,
        y2020: invoiceAccepted2020,
      }),
      year: {
        y2019: dataLine(invoiceAccepted2019, "2019"),
        y2020: dataLine(invoiceAccepted2020, "2020"),
      },
    },
    notAccepted: {
      data: invoicenotAccepted,
      total: invoicenotAccepted.length,
      line: dataLine({
        y2019: invoicenotAccepted2019,
        y2020: invoicenotAccepted2020,
      }),
      year: {
        y2019: dataLine(invoicenotAccepted2019, "2019"),
        y2020: dataLine(invoicenotAccepted2020, "2020"),
      },
    },
  };

  return returnObj;
}

const dataLine = (data, year?) => {
  let obj: Array<any> = [];

  if (year === "2019") {
    obj = [
      {
        value: returnSums(filterByValue(data, "09")),
      },
      {
        value: returnSums(filterByValue(data, "10")),
      },
      {
        value: returnSums(filterByValue(data, "11")),
      },
      {
        value: returnSums(filterByValue(data, "12")),
      },
    ];
  } else if (year === "2020") {
    obj = [
      {
        value: returnSums(filterByValue(data, "01")),
      },
      {
        value: returnSums(filterByValue(data, "02")),
      },
      {
        value: returnSums(filterByValue(data, "03")),
      },
      {
        value: returnSums(filterByValue(data, "04")),
      },
      {
        value: returnSums(filterByValue(data, "05")),
      },
      {
        value: returnSums(filterByValue(data, "06")),
      },
      {
        value: returnSums(filterByValue(data, "07")),
      },
      {
        value: returnSums(filterByValue(data, "08")),
      },
      {
        value: returnSums(filterByValue(data, "09")),
      },
      {
        value: returnSums(filterByValue(data, "10")),
      },
      {
        value: returnSums(filterByValue(data, "11")),
      },
      {
        value: returnSums(filterByValue(data, "12")),
      },
    ];
  } else {
    obj = [
      {
        value: returnSums(filterByValue(data.y2019, "09")),
      },
      {
        value: returnSums(filterByValue(data.y2019, "10")),
      },
      {
        value: returnSums(filterByValue(data.y2019, "11")),
      },
      {
        value: returnSums(filterByValue(data.y2019, "12")),
      },
      {
        value: returnSums(filterByValue(data.y2020, "01")),
      },
      {
        value: returnSums(filterByValue(data.y2020, "02")),
      },
      {
        value: returnSums(filterByValue(data.y2020, "03")),
      },
      {
        value: returnSums(filterByValue(data.y2020, "04")),
      },
      {
        value: returnSums(filterByValue(data.y2020, "05")),
      },
      {
        value: returnSums(filterByValue(data.y2020, "06")),
      },
      {
        value: returnSums(filterByValue(data.y2020, "07")),
      },
      {
        value: returnSums(filterByValue(data.y2020, "08")),
      },
      {
        value: returnSums(filterByValue(data.y2020, "09")),
      },
      {
        value: returnSums(filterByValue(data.y2020, "10")),
      },
      {
        value: returnSums(filterByValue(data.y2020, "11")),
      },
      {
        value: returnSums(filterByValue(data.y2020, "12")),
      },
    ];
  }

  return obj;
};
