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
    last := 0
    increseas := 0
    for _, data := range dataSet {
        if last != 0 {
            if data > last {
                increseas++
            }
        }
        last = data
    }
    fmt.Println(increseas)
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