# -*- mode: ruby -*-
# vi: set ft=ruby :
#CS621: Advance web application development project
#This is BHAM activities vagranfile create on 20170719
#hostname : webproject

# Vagrantfile API/syntax version. Don't touch unless you know what you're doing!
VAGRANTFILE_API_VERSION = "2"

Vagrant.configure(VAGRANTFILE_API_VERSION) do |config|

  # Every Vagrant virtual environment requires a box to build off of.
  config.vm.box = "ubuntu/xenial64"

  config.vm.hostname = "bhamactivities"

  # Create a forwarded port mapping which allows access to a specific port
  # within the machine from a port on the host machine. In the example below,
  # accessing "localhost:8080" will access port 80 on the guest machine.

  #HTTP port forward from 8080 (host) to 80 (guest)
  config.vm.network :forwarded_port, host: 8080, guest: 80

  #MySQL port forward both host and guest using the same port 3306
  config.vm.network :forwarded_port, host: 3306, guest:3306
  # Create extra forwarded port mapping
  config.vm.network :forwarded_port, host: 5000, guest: 5000
  # config.vm.network :forwarded_port, host: 3000, guest: 3000

  #Enable Bridge Network Connection
  #config.vm.network "public_network", bridge: "en0: Wi-Fi (AirPort)"

  # Define the bootstrap file: A (shell) script that runs after first setup of your box (= provisioning)
  config.vm.provision :shell, path: "bootstrap.sh"

  # Share an additional folder to the guest VM. The first argument is the path on the host to the actual folder.
  # The second argument is the path on the guest to mount the folder.
  config.vm.synced_folder "./", "/var/www/html"
end
