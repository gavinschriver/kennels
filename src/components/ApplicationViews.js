import React from "react";
import { Route } from "react-router-dom";
import { LocationProvider } from "./location/LocationProvider";
import { AnimalProvider } from "./animal/AnimalProvider";
import { EmployeeProvider } from "./employee/EmployeeProvider";
import { CustomerProvider } from "./customer/CustomerProvider";
import { LocationList } from "./location/LocationList";
import { AnimalList } from "./animal/AnimalList";
import { EmployeeList } from "./employee/EmployeeList";
import { CustomerList } from "./customer/CustomerList";
import { EmployeeForm } from "./employee/EmployeeForm";

export const ApplicationViews = (props) => {
  return (
    <>
      <LocationProvider>
        <Route exact path="/">
          <LocationList />
        </Route>
      </LocationProvider>

      <AnimalProvider>
        <CustomerProvider>
          <LocationProvider>
            <Route exact path="/animals">
              <AnimalList />
            </Route>
          </LocationProvider>
        </CustomerProvider>
      </AnimalProvider>

      <EmployeeProvider>
        <LocationProvider>
          <Route
            exact
            path="/employees"
            render={(propertiesObj) => <EmployeeList {...propertiesObj} />}
          ></Route>
          <Route exact path="/employees/create" render={(propies) => <EmployeeForm {...propies} /> }>
          </Route>
        </LocationProvider>
      </EmployeeProvider>

      <CustomerProvider>
        <Route path="/customers">
          <CustomerList />
        </Route>
      </CustomerProvider>
    </>
  );
};
