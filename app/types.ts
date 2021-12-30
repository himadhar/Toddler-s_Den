interface Activity {
    id: string,
    header: string,
    description: string,
    logo: string,
    parentFolderName:string
}

interface PageDetails{
    htmlPath:string,
    jsPath:string,
    cssPath?:string
}
