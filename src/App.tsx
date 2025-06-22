// import Layout from "./components/Layout";
// import ClassComponent from "./components/ClassComponent.tsx";
// import FunctionalComponent from "./components/FunctionalComponent.tsx";
// import ArrowFunctionalComponent from "./components/ArrowFunctionalComponent.tsx";
// import ArrowFunctionalComponentWithProps from "./components/ArrowFunctionalComponentWithProps.tsx";
// import ArrowFunctionalComponentWithPropsType from "./components/ArrowFunctionalComponentWithPropsType.tsx";
// import CodingFactoryLogo from "./components/CodingFactoryLogo";
// import ClassComponentWithState from "./components/ClassComponentWithState";
// import FunctionalComponentWithState from "./components/FunctionalComponentWithState";
// import Counter from "./components/Counter";
// import CounterWithMoreStates from "./components/CounterWithMoreStates.tsx";
// import CounterAdvanced from "./components/CounterAdvanced.tsx";
// import CounterWithCustomHook from "./components/CounterWithCustomHook.tsx";
// import CounterAdvancedWithCustomHook from "./components/CounterAdvancedWithCustomHook.tsx";
// import CounterWithReducer from "./components/CounterWithReducer.tsx";
// import Todo from "./components/Todo/Todo.tsx";
import { BrowserRouter, Routes, Route } from "react-router";
import RouterLayout from "./components/RouterLayout";
// import RouterExamplesLayout from "./components/RouterExamplesLayout";
// import HomePage from "./pages/HomePage";
// import NameChangerPage from "./pages/NameChangerPage";
// import OnlineStatusPage from "./pages/OnlineStatusPage";
// import UserPage from "./pages/UserPage";
// import ExamplesPage from "./pages/ExamplesPage";
// import AutoRedirectPage from "./pages/AutoRedirectPage";
// import NotFoundPage from "./pages/NotFoundPage";
// import FocusInput from "./components/FocusInput";
// import UncontrolledInput from "./components/UncontrolledInput";
// import MultiFieldForm from "./components/MultiFieldForm";
// import MultiFieldFormWithValidation from "./components/MultiFieldFormWithValidation";
// import MultiFieldFormWithZodValidation from "./components/MultiFieldFormWithZodValidation";
// import MultiFieldFormWithZodValidationMultipleErrorFields from './components/MultiFieldFormWithZodValidationMultipleErrorFields';
// import MultiFieldFormWithReactHook from "./components/MultiFieldFormWithReactHook";
import ProductList from "./pages/ProductList";
import Product from "@/pages/Product";

function App() {
  return (
    <>
      {/* <ClassComponent /> */}
      {/*<FunctionalComponent />*/}
      {/*<ArrowFunctionalComponent />*/}
      {/*<ArrowFunctionalComponentWithProps*/}
      {/*  title={"Is an Arrow Functional Component With Props"}*/}
      {/*/>*/}
      {/*<ArrowFunctionalComponentWithPropsType*/}
      {/*  title={"Is an Arrow Functional Component With Props"}*/}
      {/*  description={"this is a description"}*/}
      {/*/>*/}
      {/*<CodingFactoryLogo />*/}
      {/*<ClassComponentWithState/>*/}
      {/*<FunctionalComponentWithState/> */}
      {/*<Counter/>*/}
      {/*<CounterWithMoreStates/>*/}
      {/*<CounterAdvanced/> */}
      {/*<CounterWithCustomHook/>*/}
      {/*<CounterAdvancedWithCustomHook/>*/}
      {/*<CounterWithReducer/>*/}
      {/* <Todo/> */}

      <BrowserRouter>
        {/* <Layout> */}
        <Routes>
          {/* <Route path="/" element={<HomePage />} /> */}

          {/* <Route element={<RouterLayout />}> */}
          {/* <Route index element={<MultiFieldFormWithReactHook />} /> */}
          {/* <Route index element={<MultiFieldFormWithZodValidationMultipleErrorFields />} /> */}
          {/* <Route index element={<MultiFieldFormWithZodValidation />} /> */}
          {/* <Route index element={<MultiFieldFormWithValidation />} /> */}
          {/* <Route index element={<MultiFieldForm />} /> */}
          {/* <Route index element={<UncontrolledInput />} /> */}
          {/* <Route index element={<FocusInput />} /> */}
          {/* <Route index element={<HomePage />} /> */}
          {/* <Route path="users/:userId" element={<UserPage />} /> */}
          {/* <Route path="users" element={<UserPage />} /> */}
          {/* </Route> */}
          {/* <Route path="examples" element={<RouterExamplesLayout />}> */}
          {/* <Route index element={<ExamplesPage />} /> */}
          {/* <Route path="name-changer" element={<NameChangerPage />} /> */}
          {/* <Route path="online-status" element={<OnlineStatusPage />} /> */}
          {/* <Route path="auto-redirect" element={<AutoRedirectPage />} /> */}
          {/* </Route> */}

          {/* /examples/name-changer AND /name-changer both go to the same page */}
          {/* /examples/online-status AND /online-status both go to the same page */}
          {/* <Route path="examples?">
            <Route path="name-changer" element={<NameChangerPage />} />
            <Route path="online-status" element={<OnlineStatusPage />} />
          </Route> */}

          {/* <Route path="example/name-changer" element={<NameChangerPage />} />
            <Route path="example/online-status" element={<OnlineStatusPage />} /> */}

          {/* /examples/name-changer AND /name-changer both go to the same page */}
          {/* <Route
              path="examples?/name-changer"
              element={<NameChangerPage />}
            /> */}

          {/*   * = any   */}
          {/* <Route path="files/*" element={<FilePage />} /> */}
          {/* <Route path="*" element={<NotFoundPage />} /> */}

          <Route path="products" element={<RouterLayout />}>
            <Route index element={<ProductList />} />
            <Route path="new" element={<Product mode={"create"} />} />
            <Route path=":productId" element={<Product mode={"edit"} />} />
          </Route>
        </Routes>
        {/* </Layout> */}
      </BrowserRouter>
    </>
  );
}

export default App;
