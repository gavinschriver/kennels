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
import { AnimalForm } from "./animal/AnimalForm";
import { AnimalDetail } from "./animal/AnimalDetail";
import { EmployeeDetail } from "./employee/EmployeeDetail";
import { LocationDetail } from "./location/LocationDetail";
import { AnimalSearch } from "./animal/AnimalSearch";

export const ApplicationViews = (props) => {
  return (
    <>
      <LocationProvider>
        <EmployeeProvider>
          <AnimalProvider>
            <Route exact path="/">
              <LocationList />
            </Route>
            <Route
              path="/locations/:locationId(\d+)"
              render={(props) => <LocationDetail {...props} />}
            />
          </AnimalProvider>
        </EmployeeProvider>
      </LocationProvider>

      <EmployeeProvider>
        <Route
          exact
          path="/employees"
          render={() => <EmployeeList {...props} />}
        ></Route>
      </EmployeeProvider>

      <AnimalProvider>
        <CustomerProvider>
          <LocationProvider>
            <EmployeeProvider>
              <Route
                exact
                path="/animals"
                render={(props) => {
                  return (
                    <>
                      <AnimalSearch />
                      <AnimalList {...props} />
                    </>
                  );
                }}
              />

              <Route
                path="/animals/create"
                render={(props) => <AnimalForm {...props} />}
              />
              <Route
                path="/animals/:animalId(\d+)"
                render={(props) => <AnimalDetail {...props} />}
              />
              <Route
                path="/animals/edit/:animalId(\d+)"
                render={
                  (props) => {
                    alert('render time!')
                    return <AnimalForm {...props} />
                  }
                }
              />
            </EmployeeProvider>
          </LocationProvider>
        </CustomerProvider>
      </AnimalProvider>

      <EmployeeProvider>
        <LocationProvider>
          <AnimalProvider>
            <Route
              path="/employees/create"
              render={(props) => <EmployeeForm {...props} />}
            />
            <Route
              path="/employees/:employeeId(\d+)"
              render={(props) => <EmployeeDetail {...props} />}
            />
          </AnimalProvider>
        </LocationProvider>
      </EmployeeProvider>

      <CustomerProvider>
        <Route path="/customers">
          <CustomerList />
        </Route>
      </CustomerProvider>

      <Route
        path="/logout"
        render={(props) => {
          localStorage.removeItem("kennel_customer");
          props.history.push("/login");
        }}
      ></Route>
    </>
  );
};
