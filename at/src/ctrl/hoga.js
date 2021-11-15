import React from "react";

export class Hoga extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="hoga">
                <table width="100%">
                    <colgroup>
                    <col width="40%" />
                    <col width="20%" />
                    <col width="40%" />
                    </colgroup>
                    {[...Array(40)].map((x, i) =>
                    <tr key={i}>
                        <td><span>{i}</span><span></span></td>
                        <td><span></span></td>
                        <td><span></span><span></span></td>
                    </tr>
                    )}
                </table>
            </div>
        );
    }
}