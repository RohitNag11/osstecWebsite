import { pagesData } from "./pagesData"

const menuData = pagesData.map(v => ({ ...v, type: 'internalLink' }))

export const footerData = {
    about: {
        logo: {
            src: "/images/icons/logo_without_text.png",
            alt: "OSSTEC logo"
        },
        companyNote: "OSSTEC Ltd is a company registered in England and Wales.",
        companyNumber: "12345678",
        copyrightNote: "© OSSTEC Ltd 2023. All rights reserved.",
        designer: {
            name: "Rohit Nag",
            link: "https://rohitnag.com"
        }
    },
    columns: [

        {
            title: "Explore more",
            content: menuData,
        },
        {
            title: "Get in touch",
            content: [
                {
                    type: 'externalLink',
                    title: "LinkedIn",
                    link: "https://www.linkedin.com/company/osstec/",
                },
                {
                    type: 'externalLink',
                    title: "+44 (0) 20 1234 5678",
                    link: "tel:+44 (0) 20 1234 5678",
                },
                {
                    type: 'externalLink',
                    title: "osstec@gmail.com",
                    link: "mailto:osstec@gmail.com",
                }
            ]
        },
    ]
}