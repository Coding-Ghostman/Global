class Employee():

    def __init__(self,code,name,dept,sal):
        self.id = code
        self.name = name
        self.dept = dept
        self.sal = sal

    def info(self):
        return "Code :",self.code, "Name :",self.name, "Dept :",self.dept, "Salary: ",self.sal