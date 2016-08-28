# Linux make file

AM_CXX = clang++
AM_CXXFLAGS = \
 -std=gnu++14 \
 -Wall \
 -fPIC \
 -I../

AM_CFLAGS = \
 -std=gnu11 \
 -Wall \
 -fPIC \
 -I../

## Debug info
if DEBUG
  AM_CFLAGS += -g3 -O0
  AM_CXXFLAGS += -g3 -O0
else
  AM_CFLAGS += -O2
  AM_CXXFLAGS += -O2
endif

lib_LTLIBRARIES = libteocli.la
teocliincludedir=$(includedir)/teocli
nobase_teocliinclude_HEADERS = ../libteol0/teonet_l0_client.h
libteocli_la_SOURCES = ../libteol0/teonet_l0_client.c
libteocli_la_LDFLAGS = $(AM_LDFLAGS) -version-info 3:0:0 

noinst_PROGRAMS = <%= name %>
teocli_SOURCES = main.c
teocli_LDFLAGS = $(AM_LDFLAGS) -lteocli

noinst_PROGRAMS += <%= name %>_s
teocli_s_SOURCES = main_select.c
teocli_s_LDFLAGS = $(AM_LDFLAGS) -lteocli

uninstall-local:
	-rm -r $(teocliincludedir)
