# webapp

NOTE: This repository is no longer updated, all relevant code is moved to INTEGRATION

The webapp repository contains the UI code involved with the village facing web application. This web application allows you to download files hosted by the village server.

## Setup
1. Install Ruby (https://www.ruby-lang.org/en/) 
2. Compile the sass into css by running `compass watch` in the terminal at the root of this repository
3. Run `sync.py` from the database repository. Copy the downloaded files from the (in the boxid folder) from the database repository into the root of this repository
4. Copy `eisvsfiles.db` into the api repository generated by sync.py
5. Run `python api.py` in the api repository to start the api server
6. In a new command line window run `python server.py`
7. Navigate to `localhost:1234` to view the webapp!
