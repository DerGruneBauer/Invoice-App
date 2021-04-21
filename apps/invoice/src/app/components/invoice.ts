export class Invoice {

    constructor(
        public code: string,
        public date: Date,
        public amount: number,
        public status: string,
        public client: string,
        public clientEmail: string,
        public clientStAddress: string,
        public clientCity: string,
        public clientPostCode: string,
        public clientCountry: string,
        public paymentTerms: string,
        public projectDescription: string,
        public stAddress: string,
        public city: string,
        public postCode: string,
        public country: string,
        public itemList: [
            {itemName: string, quantity: number, price: number,}
        ],
        public paymentDate: Date
    ) {  }
  
  }