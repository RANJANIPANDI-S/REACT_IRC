import {
    Box,
    Checkbox,
    FormLabel,
    Radio,
    RadioGroup,
    Stack
  } from "@chakra-ui/react";
  import React, { useEffect, useState } from "react";
  import { useSearchParams } from "react-router-dom";
  const Sidebar = () => {
    // console.log(search,"is from search")
    const [searchParams, setSearchParams] = useSearchParams("");
    const initialVeg = searchParams.getAll("category");
    const [category, setCategory] = useState(initialVeg || []);
    const initialSort = searchParams.get("order");
    const [order, setOrder] = useState(initialSort || "");
    const handleSort = (e) => {
      setOrder(e.target.value);
    };
    function handleVeg(e) {
      let newVeg = [...category];
      newVeg.includes("vegetable")
        ? (newVeg = newVeg.filter((el) => el !== e.target.value))
        : newVeg.push(e.target.value);
      setCategory(newVeg);
    }
    useEffect(() => {
      let param = { category};
      order && (param.order = order);
      setSearchParams(param);
    }, [category, order]);
    let handleFruit = (e) => {
      let newFruit = [...category];
      newFruit.includes("fruit")
        ? (newFruit = newFruit.filter((el) => el !== e.target.value))
        : newFruit.push(e.target.value);
      setCategory(newFruit);
    };
    const handleDairy = (e) => {
      let newDairy = [...category];
      newDairy.includes("Dairy")
        ? (newDairy = newDairy.filter((el) => el != e.target.value))
        : newDairy.push(e.target.value);
      setCategory(newDairy);
    };
    const handleBakery = (e) => {
      let newBakery = [...category];
      newBakery.includes("Bakery")
        ? (newBakery = newBakery.filter((el) => el != e.target.value))
        : newBakery.push(e.target.value);
      setCategory(newBakery);
    };
    return (
      <Box>
        <Box>
          <Stack spacing={5} direction="column">
            <FormLabel>Category</FormLabel>
            <Checkbox
              colorScheme="green"
              value={"vegetable"}
              onChange={handleVeg}
              defaultChecked={category.includes("vegetable")}
            >
            Arts & Musics
            </Checkbox>
            <Checkbox
              colorScheme="green"
              value={"fruit"}
              onChange={handleFruit}
              defaultChecked={category.includes("fruit")}
            >
             Biographies
            </Checkbox>
            <Checkbox
              colorScheme="green"
              value={"Dairy"}
              onChange={handleDairy}
              defaultChecked={category.includes("Dairy")}
            >
             Comics
            </Checkbox>
            <Checkbox
              colorScheme="green"
              value={"comics"}
              onChange={handleBakery}
              defaultChecked={category.includes("Bakery")}
            >
         Science & Mathematics
            </Checkbox>
          </Stack>
        </Box>
        
      </Box>
    );
  };
  
  export default Sidebar;
  