import { OrderItem } from "./OrderItem.models";

export interface Order{
    id: number,
    total: number,
    first_name: string,
    last_name : string,
    email: string,
    order_items: OrderItem[]
}