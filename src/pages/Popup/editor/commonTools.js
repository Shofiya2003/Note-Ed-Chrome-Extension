import Header from "@editorjs/header";
import Table from "@editorjs/table";
import List from "@editorjs/list";
import Embed from "@editorjs/embed";
import Warning from "@editorjs/warning";
import Code from "@editorjs/code";
import LinkTool from "@editorjs/link";
// import Image from "@editorjs/image";
import Raw from "@editorjs/raw";
import Quote from "@editorjs/quote";
import Marker from "@editorjs/marker";
import CheckList from "@editorjs/checklist";
import Delimiter from "@editorjs/delimiter";
import InlineCode from "@editorjs/inline-code";
import SimpleImage from "@editorjs/simple-image";

let tools = {
    header: Header,
    list: List,
    table: Table,
    // image: Image,
    embed: Embed,
    marker: Marker,
    warning: Warning,
    code: Code,
    linkTool: LinkTool,
    raw: Raw,
    quote: Quote,
    checklist: CheckList,
    delimiter: Delimiter,
    inlineCode: InlineCode,
    simpleImage: SimpleImage
}

export default tools;