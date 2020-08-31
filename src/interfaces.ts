// Interface for PizzaItemObj object
export interface PizzaItemObjInterface {
  price: number;
  size: string;
  crust: string;
  toppings: string[];
}

// Interface for PizzaAddSize component
export interface PizzaAddSizeInterface {
  sizeName: string;
  handleAddItem: (payload: PizzaItemObjInterface) => void;
}

// Interface for PizzaAddCrust component
export interface PizzaAddCrustInterface {
  crustName: string;
  pizzaItem: PizzaItemObjInterface;
  handleAddItem: (payload: PizzaItemObjInterface) => void;
}

// Interface for PizzaAddToppings component
export interface PizzaAddToppingsInterface {
  toppingsNames: string[];
  pizzaItem: PizzaItemObjInterface;
  handleAddItem: (payload: PizzaItemObjInterface) => void;
}

export interface PizzaListInterface {
  pizzaItem: PizzaItemObjInterface;
}

// PAGES

// Interface for SizePage
export interface SizePageInterface {
  pizzaItem: PizzaItemObjInterface;
  sizeName: string;
  setSizeName: React.Dispatch<React.SetStateAction<string>>;
  setPizzaItem: React.Dispatch<React.SetStateAction<PizzaItemObjInterface>>;
}

// Interface for CrustPage
export interface CrustPageInterface {
  pizzaItem: PizzaItemObjInterface;
  crustName: string;
  setCrustName: React.Dispatch<React.SetStateAction<string>>;
  setPizzaItem: React.Dispatch<React.SetStateAction<PizzaItemObjInterface>>;
}

// Interface for ToppingsPage
export interface ToppingsPageInterface {
  pizzaItem: PizzaItemObjInterface;
  toppingsNames: string[];
  setToppingsNames: React.Dispatch<React.SetStateAction<string[]>>;
  setPizzaItem: React.Dispatch<React.SetStateAction<PizzaItemObjInterface>>;
}
