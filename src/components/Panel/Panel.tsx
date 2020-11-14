import React from "react";
import dataFetch from "../../data/fetch";

import CircularIndeterminate from "../Layout/Loading";
import { PanelWedding } from "./PanelWedding";
import WeddingService from "../../data/wedding.service";
import { PanelInvoice } from "./PanelInvoice";
import InvoiceService from "../../data/invoice.service";

interface TodoProps {
  endpoint: string;
}

interface TodoState {
  items: dataApi[];
  weddingsUser: Array<any>;
}
type dataApi = {
  BUDGET: number;
};

export default class PanelComponent extends React.Component<TodoProps> {
  public state = {
    items: [],
    budget: [],
    weddingsUser: [],
    favorites: [],
    invoice: [],
  };

  constructor(props: TodoProps) {
    super(props);
    this.state = {
      items: [],
      budget: [],
      weddingsUser: [],
      favorites: [],
      invoice: [],
    };
  }

  componentDidMount() {
    const stringParams = "limit=1000000&query_type=and";
    const queryParams = new URLSearchParams(stringParams);

    const stringParamsA = new URLSearchParams("limit=1000000&query_type=and");

    dataFetch(this.props.endpoint, queryParams)
      .then((items) => this.setState({ items: items, budget: items.BUDGET }))
      .then();
  }

  render() {
    if (this.state.items.length === 0) {
      return (
        <div>
          <CircularIndeterminate />
        </div>
      );
    }

    const dataType = this.props.endpoint;




   


    const resultUser = this.state.weddingsUser.map((item: any) => {
      return item.ID;
    });
    const favs = this.state.favorites.map((item: any) => {
      return item;
    });



    const weddingId = this.state.items.map((item: any) => {
      return item.ID;
    });
    const ownerId = this.state.items.map((item: any) => {
      return item.OWNER_ID;
    });

    // console.log('resultUser',this.state.weddingsUser.length)

    var userswithWedding = resultUser.filter((i) => ownerId.indexOf(i) !== -1);

    //  console.log('weddingID', weddingId, 'ownerID',ownerId, 'users with wedding', userswithWedding)
   
    let PanelData = {};
    switch(dataType) {
      case 'wedding':
        PanelData = WeddingService(this.state.items)
        break;
        case 'invoice':
          PanelData = InvoiceService(this.state.items)
          break;
      default:
        PanelData = {};
        break;
    }

  

    // const InvoicePanelData = InvoiceService(this.state.items);
    return (  
      <div>
        {dataType === "wedding" ? (
          <div>
            {this.state.items.length !== 0 ? (
              <PanelWedding data={PanelData} />
            ) : (
              ""
            )}
          </div>
        ) : (
          ""
        )}

      {dataType === "invoice" ? (
              <div>
                {this.state.items.length !== 0 ? (
                  // <div>aaa</div>
                  <PanelInvoice data={PanelData} />
                ) : (
                  ""
                )}
              </div>
            ) : (
              ""
            )}


      </div>
    );
  }
}
