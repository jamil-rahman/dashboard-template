import React from "react";

export default function Table() {
  return (
    <table className="items-center w-full bg-transparent border-collapse mt-4">
      <thead>
        <tr>
          <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border-b border-b-border py-3 text-xs capitalize border-l-0   -border border-r-0 whitespace-nowrap font-regular text-left">
            <input type="checkbox" />
          </th>
          <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border-b border-b-border py-3 text-xs capitalize border-l-0  -border border-r-0 whitespace-nowrap font-regular text-left">
            Date Updated
            <i className="fa fa-arrow-down  ml-2"></i>
          </th>
          <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border-b border-b-border py-3 text-xs capitalize border-l-0  -border border-r-0 whitespace-nowrap font-regular text-left">
            Title
            <i className="fa fa-sort ml-2"></i>
          </th>
          <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border-b border-b-border py-3 text-xs capitalize border-l-0  -border border-r-0 whitespace-nowrap font-regular text-left">
            Details
          </th>
          <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border-b border-b-border py-3 text-xs capitalize border-l-0  -border border-r-0 whitespace-nowrap font-regular text-left">
            Status
          </th>
          <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border-b border-b-border py-3 text-xs capitalize border-l-0 -border border-r-0 whitespace-nowrap font-regular text-left">
            Quantity
          </th>
          <th className="lg:visible px-6 bg-blueGray-50 text-blueGray-500 align-middle border-b border-b-border py-3 text-xs capitalize border-l-0  -border border-r-0 whitespace-nowrap font-regular text-left">
            Unit Price
          </th>
          <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border-b border-b-border py-3 text-xs capitalize border-l-0  -border border-r-0 whitespace-nowrap font-regular text-left">
            Amount
            <i className="fa fa-sort ml-2"></i>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th className="border-t-0 px-6 align-middle border-l-0 border-t-border border-r-0 text-xs whitespace-nowrap p-4  text-left font-body font-regular">
            <input type="checkbox" />
          </th>
          <td className="border-t-0 px-6 align-middle border-l-0  border-t-border border-r-0 text-xs whitespace-nowrap p-4 font-body font-regular">
            11 Nov 2021
          </td>
          <td className="border-t-0 px-6 align-middle border-l-0  border-t-border border-r-0 text-xs whitespace-nowrap p-4  font-body font-regular">
            Hammer
          </td>
          <td className="border-t-0 px-6 align-middle border-l-0  border-t-border border-r-0 text-xs whitespace-nowrap p-4  font-body font-regular">
            This is a hammer to do work with
          </td>
          <td className="border-t-0 px-6 align-middle border-l-0  border-t-border border-r-0 text-xs whitespace-nowrap p-4  font-body font-regular">
            Alright
            <i className="fa fa-circle text-primary ml-2"></i>
          </td>
          <td className="border-t-0 px-6 align-middle border-l-0  border-t-border border-r-0 text-xs whitespace-nowrap p-4  font-body font-regular">
            <span className="font-bold">200</span>/300
          </td>
          <td className="border-t-0 px-6 align-middle border-l-0  border-t-border border-r-0 text-xs whitespace-nowrap p-4 font-body font-regular">
            $10
          </td>
          <td className="border-t-0 px-6 align-middle border-l-0  border-t-border border-r-0 text-xs whitespace-nowrap p-4 font-body font-regular">
            $1000.00
          </td>
        </tr>
        <tr>
          <th className="border-t-0 px-6 align-middle border-l-0  border-t-border border-r-0 text-xs whitespace-nowrap p-4 font-body font-regular text-left">
            <input type="checkbox" />
          </th>
          <td className="border-t-0 px-6 align-middle border-l-0  border-t-border border-r-0 text-xs whitespace-nowrap p-4 font-body font-regular">
            12 Nov 2021
          </td>
          <td className="border-t-0 px-6 align-middle border-l-0  border-t-border border-r-0 text-xs whitespace-nowrap p-4 font-body font-regular">
            Hammer
          </td>
          <td className="border-t-0 px-6 align-middle border-l-0  border-t-border border-r-0 text-xs whitespace-nowrap p-4 font-body font-regular">
            This is a hammer to do work with
          </td>
          <td className="border-t-0 px-6 align-middle border-l-0  border-t-border border-r-0 text-xs whitespace-nowrap p-4 font-body font-regular">
            Alright
            <i className="fa fa-circle text-primary ml-2"></i>
          </td>
          <td className="border-t-0 px-6 align-middle border-l-0  border-t-border border-r-0 text-xs whitespace-nowrap p-4 font-body font-regular">
            <span className="font-bold">200</span>/300
          </td>
          <td className="border-t-0 px-6 align-middle border-l-0  border-t-border border-r-0 text-xs whitespace-nowrap p-4 font-body font-regular">
            $10
          </td>
          <td className="border-t-0 px-6 align-middle border-l-0  border-t-border border-r-0 text-xs whitespace-nowrap p-4 font-body font-regular">
            $0.00
          </td>
        </tr>
        <tr>
          <th className="border-t-0 px-6 align-middle border-l-0  border-t-border border-r-0 text-xs whitespace-nowrap p-4 font-body font-regular text-left">
            <input type="checkbox" />
          </th>
          <td className="border-t-0 px-6 align-middle border-l-0  border-t-border border-r-0 text-xs whitespace-nowrap p-4 font-body font-regular">
            11 Oct 2021
          </td>
          <td className="border-t-0 px-6 align-middle border-l-0  border-t-border border-r-0 text-xs whitespace-nowrap p-4 font-body font-regular">
            Screw
          </td>
          <td className="border-t-0 px-6 align-middle border-l-0  border-t-border border-r-0 text-xs whitespace-nowrap p-4 font-body font-regular">
            This is a hammer to do work with
          </td>
          <td className="border-t-0 px-6 align-middle border-l-0  border-t-border border-r-0 text-xs whitespace-nowrap p-4 font-body font-regular">
            In progress
            <i className="fa fa-circle text-warning-200 ml-2"></i>
          </td>
          <td className="border-t-0 px-6 align-middle border-l-0  border-t-border border-r-0 text-xs whitespace-nowrap p-4 font-body font-regular">
            <span className="font-bold">50</span>/300
          </td>
          <td className="border-t-0 px-6 align-middle border-l-0  border-t-border border-r-0 text-xs whitespace-nowrap p-4 font-body font-regular">
            $10
          </td>
          <td className="border-t-0 px-6 align-middle border-l-0  border-t-border border-r-0 text-xs whitespace-nowrap p-4 font-body font-regular">
            $1000.00
          </td>
        </tr>
        <tr>
          <th className="border-t-0 px-6 align-middle border-l-0  border-t-border border-r-0 text-xs whitespace-nowrap p-4 font-body font-regular text-left">
            <input type="checkbox" />
          </th>
          <td className="border-t-0 px-6 align-middle border-l-0  border-t-border border-r-0 text-xs whitespace-nowrap p-4 font-body font-regular">
            14 Jan 2020
          </td>
          <td className="border-t-0 px-6 align-middle border-l-0  border-t-border border-r-0 text-xs whitespace-nowrap p-4 font-body font-regular">
            Screw
          </td>
          <td className="border-t-0 px-6 align-middle border-l-0  border-t-border border-r-0 text-xs whitespace-nowrap p-4 font-body font-regular">
            -
          </td>
          <td className="border-t-0 px-6 align-middle border-l-0  border-t-border border-r-0 text-xs whitespace-nowrap p-4 font-body font-regular">
            Out of Stock
            <i className="fa fa-circle text-error ml-2"></i>
          </td>
          <td className="border-t-0 px-6 align-middle border-l-0  border-t-border border-r-0 text-xs whitespace-nowrap p-4 font-body font-regular">
            <span className="font-bold">0</span>/300
          </td>
          <td className="border-t-0 px-6 align-middle border-l-0  border-t-border border-r-0 text-xs whitespace-nowrap p-4 font-body font-regular">
            $10
          </td>
          <td className="border-t-0 px-6 align-middle border-l-0  border-t-border border-r-0 text-xs whitespace-nowrap p-4 font-body font-regular">
            $0.00
          </td>
        </tr>
        <tr>
          <th className="border-t-0 px-6 align-middle border-l-0  border-t-border border-r-0 text-xs whitespace-nowrap p-4 font-body font-regular text-left">
            <input type="checkbox" />
          </th>
          <td className="border-t-0 px-6 align-middle border-l-0  border-t-border border-r-0 text-xs whitespace-nowrap p-4 font-body font-regular">
            1 Apr 2004
          </td>
          <td className="border-t-0 px-6 align-middle border-l-0  border-t-border border-r-0 text-xs whitespace-nowrap p-4 font-body font-regular">
            Hammer
          </td>
          <td className="border-t-0 px-6 align-middle border-l-0  border-t-border border-r-0 text-xs whitespace-nowrap p-4 font-body font-regular">
            -
          </td>
          <td className="border-t-0 px-6 align-middle border-l-0  border-t-border border-r-0 text-xs whitespace-nowrap p-4 font-body font-regular">
            In progress
            <i className="fa fa-circle text-primary ml-2"></i>
          </td>
          <td className="border-t-0 px-6 align-middle border-l-0  border-t-border border-r-0 text-xs whitespace-nowrap p-4 font-body font-regular">
            <span className="font-bold">100</span>/300
          </td>
          <td className="border-t-0 px-6 align-middle border-l-0  border-t-border border-r-0 text-xs whitespace-nowrap p-4 font-body font-regular">
            $10
          </td>
          <td className="border-t-0 px-6 align-middle border-l-0  border-t-border border-r-0 text-xs whitespace-nowrap p-4 font-body font-regular">
            $1000.00
          </td>
        </tr>
      </tbody>
    </table>
  );
}
