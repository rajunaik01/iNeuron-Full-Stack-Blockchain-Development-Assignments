// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.7.0 <0.9.0;

contract Assignment23 {
    uint8[] arr = [1, 2, 3, 4, 5, 6];

    function remove(uint8 n) public returns (uint8[] memory) {
        for (uint8 i = n; i < arr.length - 1; i++) arr[i] = arr[i + 1];
        arr.pop();
        return arr;
    }
}
