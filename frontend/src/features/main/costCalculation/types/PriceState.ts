type PriceState = {
  initialPrice: number;
  totalPrice: number;
  oneWalkPrice: number;
  oneDayPrice: number;
  oneHourPrice: number;
  walksPerDay: number;
  walksNumber: number;
  hoursNumber: number;
  visitsNumber: number;
  daysNumber: number;
  dogsNumber: number;
  trialDiscount: boolean;
  selectedService: string;
};

export default PriceState;
