/**
 * Favorite Color API
 * API for managing favorite colors
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';

export class ErrorResponse {
    /**
    * HTTP status code
    */
    'statusCode': number;
    'data'?: any | null;
    /**
    * Optional message (primarily for errors)
    */
    'message': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "statusCode",
            "baseName": "statusCode",
            "type": "number"
        },
        {
            "name": "data",
            "baseName": "data",
            "type": "any"
        },
        {
            "name": "message",
            "baseName": "message",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return ErrorResponse.attributeTypeMap;
    }
}

