export interface fastaKjb {
    browserURL?: URL;
    mykajabiURL?: URL;
    content?: Response | Promise<Response>;
    [key: string]: any;
}
export interface fastaVariables {
    fastaKjb?: fastaKjb;
    [key: string]: any;
}
