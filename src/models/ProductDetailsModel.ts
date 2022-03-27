export default interface ProductDetailsModel {
  company: string;
  productName: string;
  description: string;
  price: number;
  percentOff?: number;
  fullPrice?: number;
}
