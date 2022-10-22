export declare type Address = {
    zipCode: string;
    prefectureKana: string;
    cityKana: string;
    streetKana: string;
    prefecture: string;
    city: string;
    street: string;
};
export declare function toAddress(input: string | number): Promise<Address | null>;
