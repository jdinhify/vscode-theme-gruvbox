/* Common */
#include <stdlib.h>
#include <stdio.h>
#include <string.h>
#include <time.h>
#include <errno.h>
#include <sys/mman.h>

/* System */
#include <unistd.h>
#include <signal.h>

/* Net */
#include <netdb.h>
#include <fcntl.h>
#include <sys/types.h>
#include <sys/socket.h>
#include <netinet/in.h>
#include <arpa/inet.h>

/* Default port if none is specified */
#define DEFAULT_PORT_ECP 58057
#define DEFAULT_PORT_TES 59000


/*
 * This program creates a udp server on a given port an waits for incoming requests
 * It offers a shell so you can kill the created server
 */
int main(int argc, char** argv)
{
	int port, socket_fd, server_pid;
	char cmd[10];
	char **parsed_cmd;

	if(argc == 1)
		port = DEFAULT_PORT_ECP;
	else if(argc == 3 && ((strcmp(argv[1],"-p")) == 0))
			port = atoi(argv[2]);
	else{
		printf("ERROR: Wrong input format.\ninput: ./ECP [-p ECPport]\n");
		exit(1);
	}
	/* Create a UDP server on port */
	server_pid = start_udp_server(port, &socket_fd);
	printf("Server PID: %d\n", server_pid);

	printf("Type \"exit\" to terminate server\n");
	while(1){
		printf("> ");
		if ((fgets(cmd, 50, stdin)) == NULL){
			perror("[ERROR] no command\n");
			continue;
		}

		parsed_cmd = parseString(cmd, "\n");

		if (strcmp(parsed_cmd[0], "exit") == 0){
			/* To kill the server child process */
			printf("Closing Server...\n");
			close(socket_fd);
			if (kill(server_pid, SIGTERM) == -1){
				perror("[ERROR] Killing Server Process");
				free(parsed_cmd);
				/* Close server socket */
				exit(-1);
			}
			/* Exit */
			free(parsed_cmd);
			return 0;
		}
		else
			printf("Wrong command \"%s\".\n", parsed_cmd[0]);

		/* Free memory */
		free(parsed_cmd);
	}

	return 0;
}
