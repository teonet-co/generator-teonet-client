# <%= description %>

To make this application and Teonet L0 client library under Linux 
use command line:

    ./autogen.sh
    make

To run "teocli" example application use command line:

    src/teocli C5 10.12.35.53 9000 teostream "Hello world!"

where:

    C5 - client name
    10.12.35.53 - IP address of L0 Teonet server to connect to
    9000 - servers port
    teostream - name of teonet application to send message to
    "Hello world!" - message to send

Call from Internet:

    src/teocli C5 gt1.kekalan.net 9010 ps-server Hello
    src/teocli C5 gt1.kekalan.net 9010 teo-gbs Hello
    src/teocli C5 gt1.kekalan.net 9010 teonet-11 Hello
    src/teocli C5 gt1.kekalan.net 9010 teonet-17 Hello

Build teocli shared librare and example in command line:

    # gcc -o ./libteocli.so ../libteol0/teonet_l0_client.c -DHAVE_MINGW -shared -fPIC -Wl,--out-implib,libteocli.a
    #
    # gcc -o ./teocli ../main.c -DHAVE_MINGW libteocli.so
    # gcc -o ./teocli_s ../main_select.c -DHAVE_MINGW libteocli.so

    gcc -o ./libteocli.so ../libteol0/teonet_l0_client.c -shared -fPIC
    gcc -o ./teocli ../main.c ./libteocli.so
    sudo ldconfig

