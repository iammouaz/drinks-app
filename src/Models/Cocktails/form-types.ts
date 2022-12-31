export interface IPersonalForm {
  bar: string;
  fname: string;
  lname: string;
  phone: string;
  email: string;
}

export interface ICocktailForm {
  category: string;
  type: string;
  glass: string;
  ingredients: string[];
}


export interface ISteps {
  step: number;
  form: (IPersonalForm & ICocktailForm) ;
}
