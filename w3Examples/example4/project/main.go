package main

import (
	"fmt"
	"html/template"
	"log"
	"net/http"

	"github.com/gorilla/mux"
)

/* TEMPLATE DEFINITION BEGINNING */
var template1 *template.Template

//var templateDelims = []string{"{{%", "%}}"}

func init() {
	/* Need to parse the glob with the 'delims' function to change our comments */
	//template1 = template.Must(template1.New("ourtemp").Delims("<left>", "<right>").ParseGlob("./static/templates/*"))
	//template1.Delims("<left>", "<right>")
	//template1.Delims(templateDelims[0], templateDelims[1])
	//template1.Delims("[[", "]]")
	template1 = template.Must(template.ParseGlob("./static/templates/*"))
	//tmpl, err := template.New("index.html").Delims("[[", "]]").ParseFiles("static/templates/index.html", "templates/standTemp.gohtml")
	/*
		indexTmpl := template.New("index.html").Delims("[[", "]]")
		indexTmpl, thErr := indexTmpl.ParseFiles("./static/templates/index.html")
		if thErr != nil {
			panic(thErr)
		}
		template1 = indexTmpl
	*/
	/*
		tmpl, err := template.New("index.html").Delims("[[", "]]").ParseGlob("./static/templates/*")
		template1 = tmpl
		if err != nil {
			fmt.Println(err)
			panic(err)
		}
	*/
}

//Serves our index page
func index(w http.ResponseWriter, r *http.Request) {

	/* Execute template, handle error */
	//err2 := template1.Delims("[[", "]]").ExecuteTemplate(w, "index.html", nil)
	err1 := template1.ExecuteTemplate(w, "index.html", 5)
	HandleError(w, err1)
}

//Serves a test get
func testGet(w http.ResponseWriter, r *http.Request) {
	//Send a response back to Ajax after session is made
	theSuccMessage := "Hello from the test func you called to"

	fmt.Fprint(w, theSuccMessage)
}

//Serves ANOTHER test get
func testGetTheSecond(w http.ResponseWriter, r *http.Request) {
	//Send a response back to Ajax after session is made
	theSuccMessage := "Hello from the SECOND test get you called to"

	fmt.Fprint(w, theSuccMessage)
}

func handleRequests() {
	myRouter := mux.NewRouter().StrictSlash(true)

	http.Handle("/favicon.ico", http.NotFoundHandler()) //For missing FavIcon
	myRouter.HandleFunc("/", index)
	//Handles our test api calls
	myRouter.HandleFunc("/testGet", testGet).Methods("GET")                   //Handles test api call
	myRouter.HandleFunc("/testGetTheSecond", testGetTheSecond).Methods("GET") //Handles test api call
	//Serve our static files
	myRouter.Handle("/", http.FileServer(http.Dir("./static")))
	myRouter.PathPrefix("/static/").Handler(http.StripPrefix("/static/", http.FileServer(http.Dir("./static"))))
	log.Fatal(http.ListenAndServe(":3000", myRouter))
}

func main() {
	fmt.Printf("Hey, we're starting this example\n")
	//Handle Requests
	handleRequests()
}

// Handle Errors passing templates
func HandleError(w http.ResponseWriter, err error) {
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		log.Fatalln(err)
	}
}
