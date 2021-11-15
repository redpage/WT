import React from "react";
import { _M } from "../lib/solon.js";
import { WTContext } from "../lib/WT.js";
import {Hoga} from "../ctrl/hoga";

export class Home extends React.Component {
    static contextType = WTContext;
    constructor(props) {
        super(props);
        this.state = {A:1, B:2};
    }

    render() {
        console.log("render");
        let WT = this.context;
        return(
            <div>
                <Hoga></Hoga>
            </div>
        );
    }
}