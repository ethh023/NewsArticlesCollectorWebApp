import React, { useEffect, useState, useRef } from "react";

import {
  Box,
  Center,
  Image,
  Flex,
  Badge,
  Text,
  Grid,
  Button,
  Link,
  Input,
  HStack,
  Stack,
} from "@chakra-ui/react";

import "../App.css";

export default function Homepage() {
  const [globalKey, setGlobalKey] = useState("");

  const [countryFullName, setCountryFullName] = useState("");

  const [searchItem, setSearchItem] = useState("");

  const [countryRes, setCountryRes] = useState("");
  const [globalRes, setGlobalRes] = useState("");

  const [countryArticles, setCountryArticles] = useState([]);
  const [globalArticles, setGlobalArticles] = useState([]);

  useEffect(() => {
    if (countryRes !== "") {
      const listCountryArticles = countryRes.results.map((result) => result);
      setCountryArticles(listCountryArticles);
    }

    if (globalRes !== "") {
      const listGlobalArticles = globalRes.results.map((result) => result);
      setGlobalArticles(listGlobalArticles);
    }
  }, [countryRes, globalRes]);

  const fetchKey = async () => {
    try {
      const getKey = await fetch("http://localhost:3000/api-key", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (getKey.ok) {
        const gotKey = await getKey.json();
        setGlobalKey(gotKey.globalKey);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchKey();
  }, []);

  const selectCountry = (countryCode, countryFullName) => {
    setCountryFullName(countryFullName);
    handleCountrySearch(countryCode);
  };

  const removeCountrySearch = () => {
    setCountryRes("");
    setCountryArticles([]);
    setCountryFullName("");
  };

  const globalSearch = (e) => {
    setSearchItem(e.target.value);
  };

  const handleCountrySearch = async (countryCode) => {
    try {
      const getData = await fetch(
        `https://newsdata.io/api/1/news?apikey=${globalKey}&country=${countryCode}`,
        {
          method: "GET",
        }
      );

      if (getData.ok) {
        const gotData = await getData.json();
        setCountryRes(gotData);
        console.log(gotData);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleSearch = async () => {
    try {
      const getData = await fetch(
        `https://newsdata.io/api/1/news?apikey=${globalKey}&q=${searchItem}`,
        {
          method: "GET",
        }
      );

      if (getData.ok) {
        const gotData = await getData.json();
        setGlobalRes(gotData);
        console.log(gotData);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Box
        p="20px"
        borderBottom="1px"
        borderColor="#F5F5F5"
        marginBottom="50px"
      >
        <Text>News Web Application</Text>
      </Box>
      <Box m="50px auto" maxW="1200px">
        <Text>Search for anything here</Text>
        <Flex>
          <Input
            marginRight="20px"
            value={searchItem}
            onChange={globalSearch}
            autoComplete="off"
            type="text"
            placeholder="Enter here >"
          />
          <Button onClick={handleSearch}>Search</Button>
        </Flex>
        <Text mt="30px">
          OR Click on a Country label you'd like to read news articles for:
        </Text>
        <Box margin="0" maxW="200px" marginBottom="20px">
          <Flex>
            <Input
              marginRight="20px"
              value={countryFullName}
              autoComplete="off"
              type="text"
              disabled={true}
            />
            <Button onClick={removeCountrySearch}>X</Button>
          </Flex>
        </Box>
        <Box marginBottom="100px">
          <Button
            className="button-style"
            onClick={() => selectCountry("ae", "United Arab Emirates")}
          >
            United Arab Emirates
          </Button>
          <Button
            className="button-style"
            onClick={() => selectCountry("ar", "Argentina")}
          >
            Argentina
          </Button>
          <Button
            className="button-style"
            onClick={() => selectCountry("at", "Austria")}
          >
            Austria
          </Button>
          <Button
            className="button-style"
            onClick={() => selectCountry("au", "Australia")}
          >
            Australia
          </Button>
          <Button
            className="button-style"
            onClick={() => selectCountry("be", "Belgium")}
          >
            Belgium
          </Button>
          <Button
            className="button-style"
            onClick={() => selectCountry("bg", "Bulgaria")}
          >
            Bulgaria
          </Button>
          <Button
            className="button-style"
            onClick={() => selectCountry("br", "Brazil")}
          >
            Brazil
          </Button>
          <Button
            className="button-style"
            onClick={() => selectCountry("ca", "Canada")}
          >
            Canada
          </Button>
          <Button
            className="button-style"
            onClick={() => selectCountry("ch", "Switzerland")}
          >
            Switzerland
          </Button>
          <Button
            className="button-style"
            onClick={() => selectCountry("cn", "China")}
          >
            China
          </Button>
          <Button
            className="button-style"
            onClick={() => selectCountry("co", "Colombia")}
          >
            Colombia
          </Button>
          <Button
            className="button-style"
            onClick={() => selectCountry("cu", "Cuba")}
          >
            Cuba
          </Button>
          <Button
            className="button-style"
            onClick={() => selectCountry("cz", "Czechia")}
          >
            Czechia
          </Button>
          <Button
            className="button-style"
            onClick={() => selectCountry("de", "Germany")}
          >
            Germany
          </Button>
          <Button
            className="button-style"
            onClick={() => selectCountry("eg", "Egypt")}
          >
            Egypt
          </Button>
          <Button
            className="button-style"
            onClick={() => selectCountry("fr", "France")}
          >
            France
          </Button>
          <Button
            className="button-style"
            onClick={() => selectCountry("gb", "United Kingdom")}
          >
            United Kingdom
          </Button>
          <Button
            className="button-style"
            onClick={() => selectCountry("gr", "Greece")}
          >
            Greece
          </Button>
          <Button
            className="button-style"
            onClick={() => selectCountry("hk", "Hong Kong")}
          >
            Hong Kong
          </Button>
          <Button
            className="button-style"
            onClick={() => selectCountry("hu", "Hungary")}
          >
            Hungary
          </Button>
          <Button
            className="button-style"
            onClick={() => selectCountry("id", "Indonesia")}
          >
            Indonesia
          </Button>
          <Button
            className="button-style"
            onClick={() => selectCountry("ie", "Ireland")}
          >
            Ireland
          </Button>
          <Button
            className="button-style"
            onClick={() => selectCountry("il", "Israel")}
          >
            Israel
          </Button>
          <Button
            className="button-style"
            onClick={() => selectCountry("in", "India")}
          >
            India
          </Button>
          <Button
            className="button-style"
            onClick={() => selectCountry("it", "Italy")}
          >
            Italy
          </Button>
          <Button
            className="button-style"
            onClick={() => selectCountry("jp", "Japan")}
          >
            Japan
          </Button>
          <Button
            className="button-style"
            onClick={() => selectCountry("kr", "Korea")}
          >
            Korea
          </Button>
          <Button
            className="button-style"
            onClick={() => selectCountry("lt", "Lithuania")}
          >
            Lithuania
          </Button>
          <Button
            className="button-style"
            onClick={() => selectCountry("lv", "Latvia")}
          >
            Latvia
          </Button>
          <Button
            className="button-style"
            onClick={() => selectCountry("ma", "Malta")}
          >
            Malta
          </Button>
          <Button
            className="button-style"
            onClick={() => selectCountry("mx", "Mexico")}
          >
            Mexico
          </Button>
          <Button
            className="button-style"
            onClick={() => selectCountry("my", "Malaysia")}
          >
            Malaysia
          </Button>
          <Button
            className="button-style"
            onClick={() => selectCountry("ng", "Nigeria")}
          >
            Nigeria
          </Button>
          <Button
            className="button-style"
            onClick={() => selectCountry("nl", "Netherlands")}
          >
            Netherlands
          </Button>
          <Button
            className="button-style"
            onClick={() => selectCountry("no", "Norway")}
          >
            Norway
          </Button>
          <Button
            className="button-style"
            onClick={() => selectCountry("nz", "New Zealand")}
          >
            New Zealand
          </Button>
          <Button
            className="button-style"
            onClick={() => selectCountry("ph", "Philippines")}
          >
            Philippines
          </Button>
          <Button
            className="button-style"
            onClick={() => selectCountry("pl", "Poland")}
          >
            Poland
          </Button>
          <Button
            className="button-style"
            onClick={() => selectCountry("ro", "Romania")}
          >
            Romania
          </Button>
          <Button
            className="button-style"
            onClick={() => selectCountry("rs", "Serbia")}
          >
            Serbia
          </Button>
          <Button
            className="button-style"
            onClick={() => selectCountry("ru", "Russia")}
          >
            Russia
          </Button>
          <Button
            className="button-style"
            onClick={() => selectCountry("sa", "Saudi Arabia")}
          >
            Saudi Arabia
          </Button>
          <Button
            className="button-style"
            onClick={() => selectCountry("se", "Sweden")}
          >
            Sweden
          </Button>
          <Button
            className="button-style"
            onClick={() => selectCountry("sg", "Singapore")}
          >
            Singapore
          </Button>
          <Button
            className="button-style"
            onClick={() => selectCountry("si", "Slovenia")}
          >
            Slovenia
          </Button>
          <Button
            className="button-style"
            onClick={() => selectCountry("sk", "Slovakia")}
          >
            Slovakia
          </Button>
          <Button
            className="button-style"
            onClick={() => selectCountry("th", "Thailand")}
          >
            Thailand
          </Button>
          <Button
            className="button-style"
            onClick={() => selectCountry("tr", "Turkey")}
          >
            Turkey
          </Button>
          <Button
            className="button-style"
            onClick={() => selectCountry("tw", "Taiwan")}
          >
            Taiwan
          </Button>
          <Button
            className="button-style"
            onClick={() => selectCountry("ua", "Ukraine")}
          >
            Ukraine
          </Button>
          <Button
            className="button-style"
            onClick={() => selectCountry("us", "United States")}
          >
            United States
          </Button>
          <Button
            className="button-style"
            onClick={() => selectCountry("ve", "Venezuala")}
          >
            Venezuala
          </Button>
          <Button
            className="button-style"
            onClick={() => selectCountry("za", "South Africa")}
          >
            South Africa
          </Button>
        </Box>

        <Text paddingBottom="20px" fontSize="2em">
          News Articles
        </Text>

        {countryRes === "" && globalRes === "" && (
          <Text>
            Type something in Search or select a country label to see results
          </Text>
        )}

        {countryRes !== "" && (
          <Box maxW="1200px" borderBottomWidth="1px">
            <Box maxW="1200px" borderBottomWidth="1px">
              <Text paddingBottom="20px" fontSize="2em">
                Results for country label search: "{countryFullName}"
              </Text>
            </Box>
          </Box>
        )}

        {countryRes !== "" && (
          <Center>
            <Grid templateColumns="repeat(3, 1fr)" gap={10}>
              {countryArticles.map((result, index) => (
                <Link
                  key={index}
                  href={result.link}
                  target="_blank"
                  mt="20px"
                  borderWidth="1px"
                  borderRadius="16px"
                >
                  <Box maxW="520px">
                    {result.image_url !== "null" && (
                      <Image src={result.image_url} borderTopRadius="16px" />
                    )}

                    <Box borderBottom="1px" borderColor="lightgray">
                      <Text fontSize="1.5em" p="10px">
                        {result.title}
                      </Text>
                    </Box>
                    <Text pt="10px" pl="10px">
                      Date Created: {result.pubDate}
                    </Text>
                    <Text pt="10px" pl="10px" pb="20px">
                      Website: {result.source_id}
                    </Text>
                  </Box>
                </Link>
              ))}
            </Grid>
          </Center>
        )}

        {globalRes !== "" && (
          <Box maxW="1200px" borderBottomWidth="1px">
            <Box maxW="1200px" borderBottomWidth="1px">
              <Text paddingBottom="20px" fontSize="2em">
                Results for search: "{searchItem}"
              </Text>
            </Box>
          </Box>
        )}

        {globalRes !== "" && (
          <Center>
            <Grid templateColumns="repeat(3, 1fr)" gap={10}>
              {globalArticles.map((result, index) => (
                <Link
                  key={index}
                  href={result.link}
                  target="_blank"
                  mt="20px"
                  borderWidth="1px"
                  borderRadius="16px"
                >
                  <Box maxW="520px">
                    {result.image_url !== "null" && (
                      <Image src={result.image_url} borderTopRadius="16px" />
                    )}

                    <Box borderBottom="1px" borderColor="lightgray">
                      <Text fontSize="1.5em" p="10px">
                        {result.title}
                      </Text>
                    </Box>
                    <Text pt="10px" pl="10px">
                      Date Created: {result.pubDate}
                    </Text>
                    <Text pt="10px" pl="10px" pb="20px">
                      Website: {result.source_id}
                    </Text>
                  </Box>
                </Link>
              ))}
            </Grid>
          </Center>
        )}
      </Box>
    </>
  );
}
