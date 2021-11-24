import React from 'react';

export default class DynamicTable extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            message: "",
            items: [],
            headings: false,
        }
    }

    updateMessage(event) {
        this.setState({
            message: event.target.value
        });
    }

    handleClick() {
        var items = this.state.items;

        items.push(this.state.message);

        this.setState({
            items: items,
            message: "",
            headings: true,
        });
    }

    handleItemDeleted() {
        var items = this.state.items;
        items.splice(0, 1);

        this.setState({
            items: items
        });
    }

    renderRows() {
        var context = this;        
        return this.state.items.map(function () {
            return (
                <tr className="text-center text-white">
                    <td>
                        <input
                            type="text"
                            className="w-80 px-2 bg-secondary focus:outline-none h-10 mt-5"
                            placeholder="Start with @"
                        />
                    </td>
                    <td>
                        <input
                            type="text"
                            className="w-60 px-2 bg-secondary focus:outline-none h-10 mt-5"
                            placeholder="Specify a role"
                        />
                    </td>
                    <td>
                        <input
                            type="text"
                            className="w-60 px-2 bg-secondary focus:outline-none h-10 mt-5"
                            placeholder="Enter a %"
                        />
                    </td>
                    <td>
                        <button
                            className="mt-5 ml-10 bg-red-700 text-white h-6 w-6 rounded-full"
                            onClick={context.handleItemDeleted.bind(context)}
                        >
                            X
                        </button>
                    </td>
                </tr>
            );
        });
    }

    render() {
        return (
            <div className="mt-10 flex flex-col">
                <table>
                    <thead>
                        <tr className="text-white">
                            <th className="uppercase px-10">
                                Name Of the Creator
                            </th>
                            <th className="uppercase px-10">
                                Role
                            </th>
                            <th className="uppercase">
                                Royalty Split %
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="text-center text-white">
                            <td>
                                <input
                                    type="text"
                                    className="w-80 px-2 focus:outline-none bg-secondary h-10 mt-5"
                                    placeholder="Start with @"
                                />
                            </td>
                            <td>
                                <input
                                    type="text"
                                    className="w-60 px-2 focus:outline-none bg-secondary h-10 mt-5"
                                    placeholder="Specify a role"
                                />
                            </td>
                            <td>
                                <input
                                    type="text"
                                    className="w-60 px-2 focus:outline-none bg-secondary h-10 mt-5"
                                    placeholder="Enter a %"
                                />
                            </td>
                            <td>
                                <button
                                    className="mt-5 ml-10 bg-addButton invisible px-4 py-1 rounded-xl"
                                    onClick={this.handleItemDeleted.bind(this)}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                        {this.renderRows()}
                    </tbody>
                </table>

                <button
                    className="bg-addButton uppercase ml-24 h-12 w-72 pl-4 text-primary font-semibold text-left py-1 rounded-xl mt-10"
                    onClick={this.handleClick.bind(this)}
                >
                    + Add More Collaborators
                </button>
            </div>
        );
    }
}