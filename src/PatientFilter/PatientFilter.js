import React, {useState} from "react";
import styles from "./PatientFilter.module.css";

export default function PatientFilter({active, orderCreatorOpener}) {

    return <div className={styles.patientsFilter}>
        <div>
            <label>Search by: </label>
            <input type="search" />
        </div>


        <button type="button">Search</button>
        <button type="button" onClick={active} className={styles.addNew}>Add New Patient</button>
        <button type="button" onClick={() => orderCreatorOpener("flex")}>Create Emergency Order</button>
        <button type="button">Add New Patient and Create The Order</button>
    </div>
}