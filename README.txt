GROUP: BHAM Activities

ssh: git@gitlab.cs.uab.edu:rsmith17/final-project.git
https: https://gitlab.cs.uab.edu/rsmith17/final-project.git

To run the project:
1. Open terminal(Linux/Mac) or git bash (windows).
2. Setup git SSH key (Reference from CS621/ASM1):
  - Open terminal(Linux/Mac) or git bash (windows).
  - Type the following commands:
       $git config --global user.name yourName
       $git config --global user.email yourBlazerID@uab.edu

       - Do not copy and paste, replace with your name and yourBlazerID with your BlazerID.

  - Type $ssh-keygen -t rsa -C youBlazerID@uab.edu -b 4096
  - Type $cat ~/.ssh/id_rsa.pub
       - You shall see a string starting with ssh-rsa and ending with your email.
       - Copy the string starting with ssh-rsa and ending with your email.
  - Go back to https://gitlab.cis.uab.edu/.
  - At the upper right corner, click the triangle next to your profile.
  - Click setting.
  - Click SSH Keys.
  - Paste the key in the box. Click add key.


3. Clone the project from the git repository

  $git clone git@gitlab.cs.uab.edu:rsmith17/final-project.git

4.Run the vagrant file

  $vagrant up

5.Open the web browser(Google Chrome/Firefox/Opera/Internet Explorer) and access to the following url:

  http://localhost:8080

6.To SSH to the virtual machine

  $vagrant ssh

  FYI: the apache configuration file, wsgi file, python3,
  MySQL database , database schemas and flask's requirement packages are installed by using bootstrap.sh
