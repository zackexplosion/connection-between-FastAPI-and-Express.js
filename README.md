# Before start

Run `npm install` for express.js, then `node index.js` to start the express server.

Run `pip install fastapi requests` for FastAPI, then run `fastapi dev main.py` to start the FastAPI dev server.


## If pip install failed on MacOS

Because MacOS has built-in python for the system working, and we don't want to pollute it so we will use `pyenv` to do that.

First `brew install pyenv` ( Assume you already installed brew on your Mac)

Then install the current stable version of python3

`pyenv install 3.12`

Then set it to global python

`pyenv global 3.12`

Then confirm those steps are correct by `pyenv versions`, terminal should output something like this.

```
  system
* 3.12.3 (set by /Users/tony/.pyenv/version)
```

Then you should able to run `pip install fastapi requests` without errors.

## FastAPI to Express.js

After those actions, you should able to access this link http://127.0.0.1:8000/docs#/default/index__get

And to make sure the response is from express.js server with `/` root route.

![image](https://github.com/zackexplosion/connection-between-FastAPI-and-Express.js/assets/5180966/032b5ea3-3344-45a0-b2c8-ce9ac79d7830)


## Express.js to FastAPI


By access this, http://127.0.0.1:3001/hello_to_fastapi

You should see the response from FastAPI.


![image](https://github.com/zackexplosion/connection-between-FastAPI-and-Express.js/assets/5180966/b26bc8e1-54e8-49da-8f90-356f20542545)
