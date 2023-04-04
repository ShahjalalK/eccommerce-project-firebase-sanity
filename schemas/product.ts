import {Rule, Schema, SchemaTypeDefinition} from 'sanity'

export const product : SchemaTypeDefinition = {
    title : "Products",
    name : "product",
    type : "document",
    fields : [
        {
            title : "Title",
            name : "title",
            type : "string",
            validation : (rule:Rule) => rule.required()
        },
        {
            title : "Slug",
            name : "slug",
            type : "slug",
            options : {
                source : 'title',
                maxLength : 100
            },
            validation : (rule:Rule) => rule.required()
        },
        {
            title : "SKU",
            name : "sku",
            type : "string",
        },
        {
            title : "Price",
            name : "price",
            type : "number",
            validation : (rule:Rule) => rule.required()
        },
        {
            title : "Old Price",
            name : "oldprice",
            type : "number"
        },
        {
            title : "Images",
            name : "images",
            type : "array",
            of : [
                {
                    type : 'image',
                    options : {hotspot : true},
                }
            ]
        },
        {
            title : "Category",
            name : "category",
            type : "reference",
            to : {type : 'category'}       
        },
        {
            title : "Featured",
            name : "featured",
            type : "boolean"
        },
        {
            title : "Description",
            name : "description",
            type : "text"            
        }       
    ],
    preview : {
        select : {title : 'title', subtitle: 'category.title', media : 'image'}
    }
}

