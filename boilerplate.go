package main

import (
    "bufio"
    "fmt"
    "log"
    "os"
    "strconv"
)

func main() {
    lines := readFile()
    dataSet := resultToInt(lines)
    for i, data := range dataSet {
        fmt.Print(strconv.Itoa(i) + ": ");
        fmt.Println(data);
    }
}

func resultToInt(input []string) (result []int) {
    for _, i := range input {
        integer, _:= strconv.Atoi(i)
        result = append(result, integer)
    }
    return
}

func readFile() (input []string ){
    file, err := os.Open("../input/input1.txt")
    if err != nil {
        log.Fatal(err)
    }
    defer file.Close()

    scanner := bufio.NewScanner(file)
    for scanner.Scan() {
        input = append(input, scanner.Text())
    }

    if err := scanner.Err(); err != nil {
        log.Fatal(err)
    }
    return
}