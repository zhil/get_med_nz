build:
	cd getmednz && daml build
	cd getmednz && daml codegen js -o daml.js .daml/dist/*.dar

deploy:	build
	mkdir -p deploy
	cp getmednz/.daml/dist/*.dar deploy
clean:
	cd getmednz && rm -rf .daml
	cd getmednz && rm -rf daml.js
	rm -rf deploy
